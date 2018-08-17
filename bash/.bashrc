#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

screenfetch -A "Mac OS X" -w

#Supposed to be arrows for the bash prompt, not working
#powerline-daemon -q
#POWERLINE_BASH_CONTINUATION=1
#POWERLINE_BASH_SELECT=1

#source ~/.powerline.sh
modprobe vboxdrv
alias ls='ls --color=auto'
alias tb='docker run --rm -it -e "HOST_CW_DIR=${PWD}" -e "CALLING_HOST_NAME=$(hostname)" -e "CALLING_UID"=$UID -e "CALLING_OS"=$(uname) -v ${PWD}:/tb-module -v ${HOME}/.ssh:/root/.ssh -v /var/run/docker.sock:/var/run/docker.sock bitcraze/toolbelt'


PS1=" \[\e[1;32m\]λ \W \[\e[0m\] "

