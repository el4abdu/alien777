@echo off
echo Setting up repository for first time...

:: Clone the repository
git clone https://github.com/el4abdu/al-en777.git
cd al-en777

:: Set git credentials
git config --global user.name "el4abdu"
git config --global user.email "mmmmorad123@gmail.com"

echo.
echo Setup Complete!
echo.
pause 