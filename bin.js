#!/usr/bin/env node

var u2 = require('./');

var commands = process.argv.slice(2);
u2(commands);
