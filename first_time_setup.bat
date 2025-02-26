@echo off
echo Setting up repository for first time...

:: Set git credentials
git config --global user.name "el4abdu"
git config --global user.email "mmmmorad123@gmail.com"

:: Initialize git repository
git init

:: Add remote repository
git remote add origin https://github.com/el4abdu/al-en777.git

:: Create main branch
git checkout -b main

echo.
echo Setup Complete! Now you can use update_github.bat to push changes
echo.
pause 