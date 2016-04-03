# Assumptions: NVM installed
# Add a reference to nvm
export NVM_DIR=~/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Baseline to Node LTS
nvm install 4.3.1

# Grab npm3 so we don't jack up people's npm 2.x configs
npm install -g npm3

# Global dependencies
npm3 install react-native-cli webpack webpack-dev-server babel-cli -g

# Clone repos, if necessary
[ ! -d ./chain-reaction.common ] && git clone https://github.com/ericnograles/chain-reaction.common.git
[ ! -d ./chain-reaction.mobile ] && git clone https://github.com/ericnograles/chain-reaction.mobile.git
[ ! -d ./chain-reaction.web ] && git clone https://github.com/ericnograles/chain-reaction.web.git
[ ! -d ./chain-reaction.api ] && git clone https://github.com/ericnograles/chain-reaction.api.git

# npm installs and git pulls
# API
cd ./chain-reaction.api
rm -rf ./node_modules
git pull
npm3 install

# Common. Establish a global link
cd ../chain-reaction.common
rm -rf ./node_modules
git pull
npm3 install
npm3 link

# Web
cd ../chain-reaction.web
rm -rf ./node_modules
git pull
npm3 install
npm3 link chain-reaction.common

# Mobile
cd ../chain-reaction.mobile
rm -rf ./node_modules
git pull
npm3 install

