@echo off
echo Setting up git credentials...

git config --global user.name "el4abdu"
git config --global user.email "mmmmorad123@gmail.com"

:: Store credentials
git config --global credential.helper store

echo Please enter your GitHub personal access token when prompted
git pull

echo Setup complete!
pause 