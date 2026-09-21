@echo off
title Site Game Zero
cd /d "%~dp0"
echo ===================================================
echo             INICIANDO SITE GAME ZERO
echo ===================================================
echo.
echo Abrindo o site no navegador em http://localhost:5173 ...
timeout /t 2 /nobreak >nul
start http://localhost:5173
npm run dev
pause
