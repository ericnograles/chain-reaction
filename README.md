# Chain Reaction

**Presented By: Eric Nograles, [Orlando Code Camp 2016](http://orlandocodecamp.com/speakers/details/74)**

## Overview

This project represents a hypothetical multi-platform application called **Chain Reaction** that demonstrates how [React](https://facebook.github.io/react/), [React Native](https://facebook.github.io/react-native/) and [Redux](https://github.com/reactjs/redux), when used together, can be an amazing architectural foundation for applications of any scale.

## Installation

1. Install [Node Version Manager](https://github.com/creationix/nvm)
2. Clone this repo
3. Run `./start.sh`

## Run the API

1. In a terminal from the root of this repo, type in `cd ./chain-reaction.api`
2. Run `node app.js`

## Run the Web Client

1. In a terminal from the root of this repo, type in `cd ./chain-reaction.web`
2. Run `./start.sh`

## Run the iOS App

1. In a terminal from the root of this repo, type in `cd ./chain-reaction.mobile`
2. Run `./start.sh`
3. Open another terminal and run `react-native run-ios`

# Architecture

## [chain-reaction.common](https://github.com/ericnograles/chain-reaction.common)

The chain-reaction.common library represents all cross-platform shareable code.  This includes all Redux components (store, reducers, actions) and also infrastructure items (services) that talk to external resources, such as a Web API.

The `chain-reaction.web` and `chain-reaction.mobile` repos reference the repo of this library directly in their [NPM](https://npmjs.org) dependencies (package.json).  This is meant to simulate a dependency to a private NPM repo.

## [chain-reaction.api](https://github.com/ericnograles/chain-reaction.api)

A simple [Sails.js](http://sailsjs.org/) Web API that serves as the backend for the app

## [chain-reaction.web](https://github.com/ericnograles/chain-reaction.web)

A React SPA, packaged with [Webpack](https://webpack.github.io/), that serves as the web front-end

## [chain-reaction.mobile](https://github.com/ericnograles/chain-reaction.mobile)

A React Native project that is the baseline for the iOS and Android versions of the app


