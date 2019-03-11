#!/usr/bin/env node
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
// const shell = require('shelljs')
const createFile = require('./core/create-file.core');
const bk = require('commander');

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("bianky we bs", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
};

const askQuestions = () => {
  const questions = [
    {
      name: "FILENAME",
      type: "input",
      message: "What is the name of the file without extension?"
    },
    {
      name: "FILETYPE",
      type: 'input',
      message: "what is the type of file ?"
    },
    {
      name: "EXTENSION",
      type: "list",
      message: "What is the file extension?",
      choices: [".ts", ".js"],
      filter: function(val) {
        return val.split(".")[1];
      }
    }
  ];
  return inquirer.prompt(questions);
};




const run = async () => {
  // show script introduction
  init();

  // ask questions
  const answers = await askQuestions();
  const { FILENAME, FILETYPE ,EXTENSION } = answers;

  // create the file
  const filePath = createFile(FILENAME, FILETYPE, EXTENSION);

  // show success message
  // success(filePath);
};

run();