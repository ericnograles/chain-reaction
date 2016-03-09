# Assumptions: NVM installed
# Add a reference to nvm
export NVM_DIR=~/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Baseline to Node LTS
nvm install 4.3.1

# Global prerequisites
npm install -g webpack webpack-dev-server

# Local NPM install
npm install

# Webpack
webpack

# Start the dev server
webpack-dev-server --content-base dist/