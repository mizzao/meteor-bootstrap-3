Package.describe({
  name: "mizzao:bootstrap-3",
  summary: "HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
  version: "3.3.1_1",
  git: "https://github.com/mizzao/meteor-bootstrap-3.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('bootstrap-3');
  api.addFiles(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'bootstrap.js'), 'client');

  // fonts
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.eot'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.svg'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.woff'), 'client');
});
