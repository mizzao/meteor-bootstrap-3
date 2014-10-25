#!/bin/sh

if [ ! -d "git-repo" ]; then
  git clone https://github.com/twbs/bootstrap.git git-repo
fi
# rm -rf bootstrap-3/fonts
# rm -rf bootstrap-3/css/bootstrap-glyphicons.css
cd "git-repo/"
git checkout -- .
git pull
npm install
grunt dist
cp -r dist/* ../bootstrap-3/