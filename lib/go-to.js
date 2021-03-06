'use babel';

import path from 'path';
import fs from 'fs-extra';
import opn from 'opn';
import helper from './helper';

export default class GoTo {
  constructor(indexer) {
    this.jumpPoints = {};
    this.indexer = indexer;
    this.indexer.onGoToDefinition(([activeFile, symbol]) => {
      let filePath;
      const packageDocsPrefix = helper.getPackageDocsPrefix();
      const isPackageSourcePath = symbol.sourcePath.startsWith(
        packageDocsPrefix
      );
      if (activeFile && isPackageSourcePath) {
        const parts = symbol.sourcePath
          .replace(packageDocsPrefix, '')
          .replace(/#.*$/, '')
          .split('/');
        if (parts.length === 4) {
          const [namespace, packageName, version, moduleName] = parts;
          filePath =
            path.join(
              activeFile.projectDirectory,
              'elm-stuff',
              'packages',
              namespace,
              packageName,
              version,
              'src',
              moduleName.replace('-', path.sep)
            ) + '.elm';
        }
      } else {
        const parts = symbol.sourcePath.split(helper.filePathSeparator());
        if (parts.length > 1) {
          filePath = parts[0];
        } else {
          filePath = symbol.sourcePath;
        }
      }
      if (!filePath || filePath.trim() === '') {
        return;
      }
      if (!fs.existsSync(filePath)) {
        if (isPackageSourcePath) {
          opn(symbol.sourcePath);
        } else {
          atom.notifications.addError('Error opening file `' + filePath + '`', {
            dismissable: true,
          });
        }
        return;
      }
      atom.workspace
        .open(filePath, { searchAllPanes: true, split: 'left' })
        .then(editor => {
          const previousPosition = editor.getCursorBufferPosition();
          helper.scanForSymbolDefinitionRange(editor, symbol, range => {
            editor.setCursorBufferPosition(range.start);
            editor.scrollToCursorPosition({ center: true });
            helper.flashRange(editor, range, 'elmjutsu-symbol-marker');
            if (!previousPosition.isEqual(range.start)) {
              this.storeJumpPoint(range.start);
            }
          });
        });
    });
  }

  destroy() {}

  goToDefinitionCommand() {
    this.goToDefinition(undefined, undefined);
  }

  goToDefinition(token, position) {
    const editor = atom.workspace.getActiveTextEditor();
    if (helper.isElmEditor(editor)) {
      this.storeJumpPoint();
      this.indexer.goToDefinition([
        helper.getActiveTopLevel(
          editor,
          position === undefined ? editor.getCursorBufferPosition() : position
        ),
        token === undefined ? helper.getToken(editor) : token,
      ]);
    }
  }

  // NOTE: You won't be able to `Go Back` to your project if you jumped to the source of a 3rd-party package.
  goBackCommand() {
    const editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    const currentPosition = editor.getCursorBufferPosition();
    const projectDirectory = helper.getProjectDirectory(editor.getPath());
    let jumpPoints = this.jumpPoints[projectDirectory]
      ? this.jumpPoints[projectDirectory]
      : null;
    if (jumpPoints) {
      const [jumpPoint, updatedJumpPoints] = getJumpPoint(
        currentPosition,
        jumpPoints
      );
      this.jumpPoints[projectDirectory] = updatedJumpPoints;
      if (jumpPoint) {
        atom.workspace
          .open(jumpPoint.uri, { searchAllPanes: true, split: 'left' })
          .then(editor => {
            editor.setCursorBufferPosition(jumpPoint.position);
            editor.scrollToCursorPosition({ center: true });
          });
      }
    }
  }

  storeJumpPoint(position) {
    const editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    position = position || editor.getCursorBufferPosition();
    const projectDirectory = helper.getProjectDirectory(editor.getPath());
    let jumpPoints = this.jumpPoints[projectDirectory]
      ? this.jumpPoints[projectDirectory]
      : [];
    jumpPoints.push({
      uri: editor.getURI(),
      position,
    });
    this.jumpPoints[projectDirectory] = jumpPoints;
  }
}

function getJumpPoint(currentPosition, jumpPoints) {
  let jumpPoint;
  do {
    jumpPoint = jumpPoints.pop();
  } while (jumpPoint && jumpPoint.position.isEqual(currentPosition));
  return [jumpPoint, jumpPoints];
}
