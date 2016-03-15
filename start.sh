# Assumptions: NVM installed
# Add a reference to nvm
export NVM_DIR=~/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Baseline to Node LTS
nvm install 4.3.1

# Clone repos
git clone https://github.com/ericnograles/chain-reaction.common.git
git clone https://github.com/ericnograles/chain-reaction.mobile.git
git clone https://github.com/ericnograles/chain-reaction.web.git
git clone https://github.com/ericnograles/chain-reaction.api.git

# npm install
# API
# cd ./chain-reaction.api
# npm install

# Common
# cd ../chain-reaction.common
# npm install

# Web
# cd ../chain-reaction.web
# npm install

# Mobile
# cd ../chain-reaction.mobile
# npm install

