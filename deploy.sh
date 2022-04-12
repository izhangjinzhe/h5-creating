#!/bin/sh

mkdir "gh-pages"
cd "gh-pages" || exit

remote=$(git config remote.origin.url)

echo "$remote"

git config --global user.name 'zhangjinzhe'
git config --global user.email 'zhangjinzhe@88.com'

git init

# shellcheck disable=SC2046
git remote add origin "$remote"
git checkout gh-pages
git rm -rf .

# shellcheck disable=SC2225
cp -a "../dist/."

git add .
git commit -m "构建"
git push origin gh-pages -f

cd ..
rm -rf gh-pages

