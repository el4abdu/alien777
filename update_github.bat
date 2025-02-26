@echo off
echo Updating GitHub Repository...

:: Add all changes
git add .

:: Get current date/time for commit message
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set datetime=%datetime:~0,8%-%datetime:~8,6%

:: Commit changes with timestamp
git commit -m "Auto update %datetime%"

:: Push to GitHub (using main branch)
git push -u origin main

echo.
echo Update Complete!
echo.
pause 