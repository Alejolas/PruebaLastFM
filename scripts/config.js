/* eslint-disable global-require */

const fs = require('fs');

try {
  process.chdir('./scripts');
} catch (err) {
  console.log(`chdir: ${err}`);
}

const all = require('../config/all.json');
const production = require('../config/production.json');
const develop = require('../config/develop.json');

const env = process.argv[2] || 'develop';
let envFile;

switch (env) {
  case 'production':
    envFile = production;
    break;

  case 'develop':
  default:
    envFile = develop;
    break;
}

const config = Object.assign(all, envFile);

fs.writeFile('../src/config.json', JSON.stringify(config, null, 2), err => {
  if (err) {
    return console.log(err);
  }

  return console.log('Config file created.');
});
