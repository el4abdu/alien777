@echo off
setlocal enabledelayedexpansion

:: Set your GitHub repository details
set REPO_URL=https://github.com/el4abdu/al-en777.git
set USERNAME=el4abdu
set EMAIL=mmmmorad123@gmail.com

:: Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Git is not installed. Please install Git from https://git-scm.com/
    pause
    exit /b
)

:: Navigate to the script's directory
cd /d "%~dp0"

:: Check if already a git repository
if not exist .git (
    echo Initializing git repository...
    git init
    git remote add origin %REPO_URL%
)

:: Configure git user
git config --global user.name "%USERNAME%"
git config --global user.email "%EMAIL%"

:: Add all changes
git add .

:: Get current timestamp
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set COMMIT_MESSAGE=Auto update %datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2% %datetime:~8,2%:%datetime:~10,2%:%datetime:~12,2%

:: Commit changes
git commit -m "%COMMIT_MESSAGE%"

:: Push to GitHub (use main branch)
git push -u origin main

if %errorlevel% equ 0 (
    echo Successfully pushed changes to GitHub
) else (
    echo Failed to push changes
    echo Make sure you have the correct permissions and are connected to the internet
)

pause 