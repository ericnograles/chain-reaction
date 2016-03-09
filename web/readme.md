# Overview

![React Templates](https://i.imgflip.com/10413l.jpg "Too Damn High")

The intent of this starter project is to educate newcomers to React on the basics. Many templates out there can get a bit confusing, so this project strips down React to the bare bones while still having some development niceties, thanks to [Webpack](https://webpack.github.io/).

# Installation

1. Install [Node Version Manager](https://github.com/creationix/nvm)
2. Clone this repo
3. Open a terminal and execute `./start.sh`
4. Browse to http://localhost:8080

# Folder Structure
* **/src**
    * **/components**: Write your React components here
    * **/containers**: Write your React containers here
    * **/assets**
        * **/images**: Any images you need for your website
        * **/styles**: Any CSS files you need for your website

# Images and CSS

## New Assets

If you need to bring in any new images or CSS, first add it to the appropriate /assets folder above.  Then modify `/src/app.js` and `require` in the new file.  In this baseline, for example, we require in `main.css` and `react-favicon.ico`.

## Rationale

The reason for this two step process is because the project currently loads assets through Webpack with a hot reloading option.  The benefit of this is that any changes to your images or CSS will be automatically loaded as you develop.

# Tools
* [Webpack](https://webpack.github.io/)
* [react-router](https://github.com/reactjs/react-router)
* [Material Design Lite](https://github.com/google/material-design-lite)

# Coming Soon
* A `redux` branch that introduces [Redux](https://github.com/reactjs/redux) concepts to state management
* SASS support
* Prettier templates from MDL
