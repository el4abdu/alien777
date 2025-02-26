@echo off

:: Set repository details
set REPO_URL=https://github.com/el4abdu/alien777.git
set USERNAME=el4abdu
set EMAIL=mmmmorad123@gmail.com

:: Navigate to project directory
cd /d "%~dp0"

:: Initialize git repository
git init

:: Add remote repository
git remote add origin %REPO_URL%

:: Configure git user
git config --global user.name "%USERNAME%"
git config --global user.email "%EMAIL%"

:: Add all project files
git add .

:: Create initial commit
git commit -m "Initial commit: Al!en 777 App Update Center"

:: Push to main branch
git push -u origin main

pause 