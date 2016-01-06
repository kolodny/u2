#!/usr/bin/env node

var spawn = require('child_process').spawn;
var parseArgs = require('./parse-args');

module.exports = u2;

function u2(commands) {
  var exitsLeft = commands.length;

  var spawnedProcesses = commands.map(function(command) {
    var parts = parseArgs(command);
    return spawn(parts[0], parts.slice(1), {stdio: 'inherit'}).on('exit', function() {
      exitsLeft--;
      if (exitsLeft === 0) {
        process.exit();
      }
    });
  });

  process.on('SIGINT', function () {
    spawnedProcesses.forEach(function(spawnedProcess) {
      spawnedProcess.kill('SIGINT');
      spawnedProcess.kill('SIGTERM');
    });
  });

}
