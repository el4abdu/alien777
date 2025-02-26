@echo off
:: Generate SSH key
ssh-keygen -t rsa -b 4096 -C "%EMAIL%"

:: Show public key to add to GitHub
type %USERPROFILE%\.ssh\id_rsa.pub

echo Copy the above key and add it to your GitHub account
echo Go to GitHub > Settings > SSH and GPG keys > New SSH key
pause 