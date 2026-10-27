@echo off
title CARE'S INDIA Website
echo Opening CARE'S INDIA website in Chrome / Browser...
start chrome "%~dp0index.html" 2>nul || start "" "%~dp0index.html"
