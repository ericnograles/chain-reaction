# Chain Reaction

**Presented By: Eric Nograles, [Orlando Code Camp 2016](http://orlandocodecamp.com/speakers/details/74)**

## Overview

This project represents a hypothetical multi-platform application called **Chain Reaction** that demonstrates how [React](https://facebook.github.io/react/), [React Native](https://facebook.github.io/react-native/) and [Redux](https://github.com/reactjs/redux), when used together, can be an amazing architectural foundation for applications of any scale.

## Installation

1. Install [Node Version Manager](https://github.com/creationix/nvm)
2. Install [MongoDB](https://docs.mongodb.org/manual/installation/)
  * (Mac OSX Users) You may want to install [Homebrew](https://brew.sh) and then run `brew install mongodb`
3. Clone this repo
4. Run `./install.sh`

**Note**: This project has not been tested in a Windows machine, but should theoretically work, assuming you have a bash port for Windows installed, such as [cygwin](http://www.cygwin.com/) or [win-bash](http://win-bash.sourceforge.net/)

## Run the API

1. In a terminal from the root of this repo, type in `cd ./chain-reaction.api`
2. Make sure mongodb is running
3. Run `node app.js`

## Run the Web Client

1. In a terminal from the root of this repo, type in `cd ./chain-reaction.web`
2. Run `./start.sh`
3. Wait for browsers to open.  `http://localhost:8080` is the web application and `http://localhost:8082` are your unit tests.
  * **Note**: Both will live reload as you modify files

## Run the iOS App

1. In a terminal from the root of this repo, type in `cd ./chain-reaction.mobile`
2. Run `./install.sh`
3. Run `node react-native-packager.js`
4. In a separate terminal, run `react-native run-ios`

# Architecture

## [chain-reaction.common](https://github.com/ericnograles/chain-reaction.common)

The chain-reaction.common library represents all cross-platform shareable code.  This includes all Redux components (store, reducers, actions) and also infrastructure items (services) that talk to external resources, such as a Web API.

## [chain-reaction.api](https://github.com/ericnograles/chain-reaction.api)

A simple [Sails.js](http://sailsjs.org/) Web API that serves as the backend for the app

## [chain-reaction.web](https://github.com/ericnograles/chain-reaction.web)

A React SPA, packaged with [Webpack](https://webpack.github.io/), that serves as the web front-end

## [chain-reaction.mobile](https://github.com/ericnograles/chain-reaction.mobile)

A React Native project that is the baseline for the iOS and Android versions of the app


