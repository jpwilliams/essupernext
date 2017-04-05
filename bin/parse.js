#! /usr/bin/env node
const fs = require('fs')
const essupernext = require('../')

if (!process.argv[2]) {
  throw new Error('Must provide a file to compile')
}

console.log(essupernext(fs.readFileSync(process.argv[2])))
