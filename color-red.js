#!/usr/bin/env node
const chalk = require('chalk')

console.log(chalk.red(process.argv.slice(2).join(' ')))
