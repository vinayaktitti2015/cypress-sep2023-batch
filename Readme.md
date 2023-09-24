npm, yarn & Cypress Commands:

# npm commands: https://nodejs.org/en/download/
1. node --version // should be > 8.0
2. npm --version
3. npm update
4. npm install 

# project level commands
1. npm init // to create package.json file and set config manually
2. npm init --yes // to create package.json file and set config automatically
3. npm install // to install all packages in a project
4. npm i // shortcut to install

# Cypress Installation:
1. npm install cypress --save-dev // to install cypress as dev-dependency
2. npm install cypress // to install cypress as dependency
3. npm install cypress@6.8.0 // to install specific cypress version

#To install cypress globally
1. npm install cypress -g

# To Open testrunner:
1. npx cypress open
 or 
2. ./node_modules/.bin/cypress open // long way with the full path

3. $(npm bin)/cypress open // shorcut using npm bin

# YARN package manager

# To install yarn globally
1. npm install -g yarn
2. Update yarn

3. yarn set version latest
4. yarn help
5. yarn install // to install all packages in project
6. #using yarn: Add a dependency yarn add [package]
7. yarn add [package]@[version] yarn add [package]@[tag]

Eg:
8. yarn add cypress --dev # dev dependencies
9. yarn add cypress
10. yarn add mocha --peer # peer dependencies
11. #using yarn: open testRunner

12. yarn run cypress open
13. yarn run cypress run

# Update dependency:
1. yarn up [package]
2. remove dependency
3. yarn remove [package]

# remove all node_modules
1. rm -rf node_modules
2. npm install // to re-install

NPM scripts

# Adding npm scripts:

{ "scripts": { "cypress:open": "cypress open", "cypress:run": "cypress run" } }

1. npm run cypress:open // invoke the command from CLI
2. npm run cypress:run // invoke the command from CLI

# cypress studio:
Config "experimentalStudio": true in cypress.json file

# Open testrunner - 
1. npx cypress open
2. click spec file
3. on browser - commands section - click Add commands or Add new test

# Stubs and mocks

Bottom-top approach:

module A module B module C

mock the data testing testing

Top-down Approach SERVER -DB

module A module B module C

ready to test ready to test mock the data

XHR Network control = XML Http Request

to wait for the server to return the response

To mock 3rd party API's -
Contract testing: 
eg: 

1. Makemytrip - Consumer [mock Airasia API's] 

2. SpaceJet - Producer - API's ready to test 

3. AirAsia - producer - API's Not ready


# mochawesome reports merge config
https://www.npmjs.com/package/mochawesome-merge

# allure reports
need to install allure-commandline globally
https://www.npmjs.com/package/allure-commandline

https://www.npmjs.com/search?q=mocha%20allure

// added yml file config