#!/usr/bin/env node
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
// const shell = require('shelljs')
const createFile = require('./core/create-file.core');
const bk = require('commander');
const {version} = require('./package.json');
const modelDir = require('./dirs/model.dir');

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("bianky we bs", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        function (err, data) {
          if(err) return console.log('Something went wrong') && console.dir(err);
          console.info(data)
        }
      })
    )
  );
};

const askQuestions = () => {
 
  bk.version(version, '-v, --version')
  .command('create <type>')
  .alias('c')
  .description('Create new dir of specific type')
  .option('-n, --name <name>', 'Name of create directory')
  .option('-e, --extension <extension>', 'extension of the file')
  .action(function(dirType ,args) {
    if(dirType && dirType === 'model') {
      modelDir(args.name, args.extension);
    }
  });

};




const run = () => {
  // show script introduction
  init();

  // ask questions
  askQuestions();
  bk.parse(process.argv);
  
  // const filePath = createFile(name, type, extension || 'ts');

};

run();