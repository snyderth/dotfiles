cp ~/.fehbg ~/dotfiles/fehbg
cp ~/.bash* ~/dotfiles/bash
cp ~/.zsh* ~/.zprofile ~/dotfiles/zsh
cp ~/.X* ~/.xinitrc ~/dotfiles/X
cp ~/.config/i3/config ~/dotfiles/i3
cp -r ~/.config/xfce4/* ~/dotfiles/xfce4-panel
cp ~/.vim* ~/dotfiles/vim
tar cvf ~/dotfiles/pacman_database.tar.gz /var/lib/pacman/local
