@echo off
:: Generate SSH key
ssh-keygen -t rsa -b 4096 -C "mmmmorad123@gmail.com"

:: Show public key to add to GitHub
type %USERPROFILE%\.ssh\id_rsa.pub

echo Copy the above key and add to GitHub
echo Go to GitHub > Settings > SSH and GPG keys > New SSH key
pause 