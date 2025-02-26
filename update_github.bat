@echo off
echo Updating GitHub Repository...

:: Set git credentials (only needed first time)
git config --global user.name "el4abdu"
git config --global user.email "mmmmorad123@gmail.com"

:: Add all changes
git add .

:: Get current date/time for commit message
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set datetime=%datetime:~0,8%-%datetime:~8,6%

:: Commit changes with timestamp
git commit -m "Auto update %datetime%"

:: Push to GitHub
git push origin master

echo.
echo Update Complete!
echo.
pause 