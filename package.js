Package.describe({
  name: 'urbanetic:bismuth-schema',
  summary: 'Schemas and collections for working with GIS apps.',
  git: 'https://github.com/urbanetic/bismuth-schema.git',
  version: '0.0.1'
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    'check',
    'coffeescript',
    'underscore',
    'aldeed:collection2@2.3.1',
    'aldeed:simple-schema@1.1.0',
    'aramk:pubsub@1.5.0',
    'aramk:q@1.0.1_1',
    'aramk:utility@0.6.0',
    'matb33:collection-hooks@0.7.6'
  ], ['client', 'server']);
  // Using Depends utility is necessary to gain access to asynchronously defined modules.
  api.imply('aramk:utility');
  api.addFiles([
    'src/Entities.coffee',
    'src/Layers.coffee',
    'src/Projects.coffee',
    'src/Reports.coffee',
    'src/Scenarios.coffee',
    'src/Typologies.coffee',
    'src/Units.coffee',
    'src/schemas/EntitySchema.coffee',
    'src/schemas/TypologySchema.coffee',
    'src/util/SchemaUtils.coffee',
    'src/util/ParamUtils.coffee'
  ], ['client', 'server']);
  api.export([
  ], ['client', 'server']);
});
