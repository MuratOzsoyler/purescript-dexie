{ name = "dexie"
, dependencies =
  [ "aff"
  , "aff-promise"
  , "effect"
  , "foldable-traversable"
  , "foreign"
  , "foreign-object"
  , "maybe"
  , "nullable"
  , "prelude"
  , "psci-support"
  , "test-unit"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
