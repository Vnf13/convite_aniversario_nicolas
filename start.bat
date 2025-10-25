@echo off
REM Caminho da pasta do convite
cd /d "C:\Users\ROBSON_SAN\Pictures\Festa do nicolas\convite"

REM Inicia o servidor Python na porta 8000
python -m http.server 8000

pause
