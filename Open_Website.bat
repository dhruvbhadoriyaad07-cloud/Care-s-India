@echo off
title CARE'S INDIA - Local Server (Port 8080)
echo ========================================================
echo   CARE'S INDIA Wholesale Website
echo   Server Address: http://localhost:8080
echo ========================================================
echo.
echo Chrome me website open ho rahi hai...
start http://localhost:8080
echo.
echo Server active hai. Website chalte waqt is black window ko band mat karein.
echo Band karne ke liye Ctrl+C dabayein ya window close karein.
echo.
node server.js
