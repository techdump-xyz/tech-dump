---
title: "Git tips and tricks"
description: "Tips on how to configure and use git"
pubDate: "May 16 2023"
published: true
---

# Using aliases
Using aliases is useful for time saving (when using git in the terminal) and it can help you
bind some specific commands you rarely use to some kybinding you will more likely remember.

Here are mine basic aliases for using git commands:
```shell
git config --global alias.st status
git config --global alias.ci commit
git config --global alias.co checkout
git config --global alias.br branch

git config --global alias.ll 'log --oneline --graph --all --decorate'
```
Another great alias is for showing all your alilases and settings
```shell
git config --global alias.gl 'config --global -l'
```
# Some overlooked settings

## Autocorrect
When you mistype some command you'll get the message `The most similar command is...` but with the use of
```shell
git config --global help.autocorrect 25
```
it will be autocorected and executed after 2.5 seconds. 

## "Global gitignore"
If you work on a mac there is a high chance that you have accidentally commited the .DS_Store folder to some repository. Of course you could add to the project .gitignore file `**/.DS_Store`. And this is correct solution but you will have to do this in every repository you will be ever working in. I'll leave up to you when you will get tired of doing this and instead use the next commands
```shell
echo ".DS_Store" >> ~/.gitignore_global
echo "**/.DS_Store" >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```
And finally you don't need to think about it anymore.

<!-- # Apps
tig tui -->