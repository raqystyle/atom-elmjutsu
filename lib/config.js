'use babel';

export default {
  autocompleteEnabled: {
    title: 'Enable Autocomplete',
    type: 'boolean',
    default: true,
    order: 1,
  },
  globalAutocompleteEnabled: {
    title: 'Enable Global Autocomplete',
    description: 'Whether to include unimported project symbols.',
    type: 'boolean',
    default: false,
    order: 2,
  },
  typeAwareAutocompleteEnabled: {
    title: 'Enable Type-Aware Autocomplete',
    description:
      'WARNING: This is highly experimental and may cause lag, especially if `Enable Global Autocomplete` is also checked.',
    type: 'boolean',
    default: false,
    order: 3,
  },
  autocompleteSnippetsEnabled: {
    title: 'Enable Autocomplete Snippets',
    type: 'boolean',
    default: false,
    order: 4,
  },
  autocompleteFuzzyFilteringEnabled: {
    title: 'Enable Autocomplete Fuzzy Filtering',
    type: 'boolean',
    default: false,
    order: 5,
  },
  autocompleteMaxSuggestions: {
    title: 'Max Number of Autocomplete Suggestions',
    description:
      'No limit if set to `0` (default).  Set this to a small number (e.g. `50`) if you are experiencing lag so that Atom will have less items to render.',
    type: 'integer',
    default: 0,
    order: 6,
  },
  autocompleteDescriptionDisplay: {
    title: 'Autocomplete Description Display',
    type: 'string',
    enum: ['markdown', 'text', 'none'],
    default: 'markdown',
    order: 7,
  },

  // Special completions:
  autoImportCompletionEnabled: {
    title: 'Enable `Auto import` special completion',
    type: 'boolean',
    default: true,
    order: 8,
  },
  replaceWithInferredTypeCompletionEnabled: {
    title: 'Enable `Replace with inferred type` special completion',
    type: 'boolean',
    default: true,
    order: 9,
  },
  insertProgramCompletionEnabled: {
    title: 'Enable `Insert program` special completion',
    description:
      'This will activate by typing `html`, `Html.program`, `platform`, or `Platform.program` in an empty editor.',
    type: 'boolean',
    default: true,
    order: 10,
  },
  insertModuleCompletionEnabled: {
    title: 'Enable `Insert module` special completion',
    type: 'boolean',
    default: true,
    order: 11,
  },
  insertLetInCompletionEnabled: {
    title: 'Enable `Insert let/in` special completion',
    type: 'boolean',
    default: true,
    order: 12,
  },
  insertIfThenElseCompletionEnabled: {
    title: 'Enable `Insert if/then/else` special completion',
    type: 'boolean',
    default: true,
    order: 13,
  },
  insertCaseOfCompletionEnabled: {
    title: 'Enable `Insert case/of` special completion',
    type: 'boolean',
    default: true,
    order: 14,
  },
  insertDefaultArgumentsCompletionEnabled: {
    title: 'Enable `Insert default arguments` special completion',
    type: 'boolean',
    default: true,
    order: 15,
  },
  replaceTypeWithDefaultCompletionEnabled: {
    title: 'Enable `Replace type with default` special completion',
    type: 'boolean',
    default: true,
    order: 16,
  },
  defineFromTypeAnnotationCompletionEnabled: {
    title: 'Enable `Define from type annotation` special completion',
    type: 'boolean',
    default: true,
    order: 17,
  },
  // replaceTypeWithAliasCompletionEnabled: {
  //   title: 'Enable `Replace type with alias` special completion',
  //   type: 'boolean',
  //   default: true,
  //   order: 18
  // },

  autocompleteMinChars: {
    title: 'Autocomplete Min Chars',
    description:
      'Minimum number of characters to type before showing suggestions.',
    type: 'integer',
    default: 1,
    order: 19,
  },

  hyperclickEnabled: {
    title: 'Enable Hyperclick',
    type: 'boolean',
    default: true,
    order: 20,
  },

  datatipsEnabled: {
    title: 'Enable Datatips',
    type: 'boolean',
    default: true,
    order: 21,
  },

  signatureHelpEnabled: {
    title: 'Enable Signature Help',
    type: 'boolean',
    default: false,
    order: 22,
  },

  showTypesInTooltip: {
    title: 'Show Types in Tooltip',
    type: 'boolean',
    default: false,
    order: 23,
  },
  // showAliasesOfTypesInTooltip: {
  //   title: 'Show Aliases of Types in Tooltip',
  //   type: 'boolean',
  //   default: false,
  //   order: 24
  // },
  typesTooltipPosition: {
    title: 'Types Tooltip Position',
    type: 'string',
    enum: ['top', 'right', 'bottom', 'left'],
    default: 'top',
    order: 25,
  },

  showSidekick: {
    title: 'Show Sidekick',
    description: 'Show types and documentation in another panel.',
    type: 'boolean',
    default: false,
    order: 26,
  },
  showTypesInSidekick: {
    title: 'Show Types in Sidekick and Datatips',
    type: 'boolean',
    default: true,
    order: 27,
  },
  showTypeCasesInSidekick: {
    title: 'Show Tags of Union Types in Sidekick and Datatips',
    type: 'boolean',
    default: true,
    order: 28,
  },
  showDocCommentsInSidekick: {
    title: 'Show Doc Comments in Sidekick and Datatips',
    type: 'boolean',
    default: true,
    order: 29,
  },
  showAssociativitiesInSidekick: {
    title: 'Show Associativities in Sidekick and Datatips',
    type: 'boolean',
    default: true,
    order: 30,
  },
  showPrecedencesInSidekick: {
    title: 'Show Precedences in Sidekick and Datatips',
    type: 'boolean',
    default: true,
    order: 31,
  },
  // showAliasesOfTypesInSidekick: {
  //   title: 'Show Aliases of Types in Sidekick',
  //   type: 'boolean',
  //   default: false,
  //   order: 32
  // },
  showSourcePathsInSidekick: {
    title: 'Show Source Paths in Sidekick and Datatips',
    type: 'boolean',
    default: true,
    order: 33,
  },
  sidekickPosition: {
    title: 'Sidekick Position',
    type: 'string',
    enum: ['top', 'right', 'bottom', 'left'],
    default: 'bottom',
    order: 34,
  },
  sidekickSize: {
    title: 'Sidekick Size (in pixels)',
    description: 'Automatically resizes to fit content if set to `0`.',
    type: 'integer',
    default: 0,
    minimum: 0,
    order: 35,
  },

  inferExpectedTypeAtCursorOnTheFly: {
    title: 'Infer Expected Type At Cursor On The Fly',
    type: 'boolean',
    default: false,
    order: 36,
  },
  inferTypeOfSelectionOnTheFly: {
    title: 'Infer Type Of Selection On The Fly',
    type: 'boolean',
    default: false,
    order: 37,
  },
  // inferHoleTypesOnTheFly: {
  //   title: 'Infer Hole Types On The Fly',
  //   type: 'boolean',
  //   default: false,
  //   order: 38
  // },

  showScopeBar: {
    title: 'Show Scope Bar',
    type: 'boolean',
    default: false,
    order: 39,
  },

  cacheDirectory: {
    title: 'Cache Directory',
    description:
      'Directory where the downloaded docs will saved.  If blank, a temporary directory will be used.  Take note that most operating systems delete temporary directories at bootup or at regular intervals.',
    type: 'string',
    default: '',
    order: 40,
  },

  elmPackageExecPath: {
    title: 'Elm Package Path',
    description: 'Path to the `elm-package` executable.',
    type: 'string',
    default: 'elm-package',
    order: 41,
  },
  elmMakeExecPath: {
    title: 'Elm Make Path',
    description: 'Path to the `elm-make` executable.',
    type: 'string',
    default: 'elm-make',
    order: 42,
  },
  elmReplExecPath: {
    title: 'Elm REPL Path',
    description: 'Path to the `elm-repl` executable.',
    type: 'string',
    default: 'elm-repl',
    order: 43,
  },
  evalPreludePath: {
    title: 'Eval Prelude Path',
    // description: 'Path to the prelude file for `Elmjutsu: Pipe Selections`.  This will also be used when invoking `Elmjutsu: Eval` in a non-Elm editor.  If blank, the default will be used (EvalPrelude.elm).',
    description:
      'Path to the prelude file for `Elmjutsu: Pipe Selections`.  If blank, the default will be used (EvalPrelude.elm).',
    type: 'string',
    default: '',
    order: 44,
  },
};
