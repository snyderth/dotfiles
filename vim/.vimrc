set nocompatible
filetype off
set nu
colorscheme desert
set smartindent

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

"required
Plugin 'VundleVim/Vundle.vim'
Bundle 'powerline/powerline', {'rtp': 'powerline/bindings/vim/'}

call vundle#end()
filetype plugin indent on

set laststatus=2
