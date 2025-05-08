@echo off
chcp 65001 >nul
title Git同步工具

:menu
cls
echo ====== Git同步工具 ======
echo.
echo  1. 提交本地代码到GitHub
echo  2. 从GitHub获取最新代码
echo  3. 查看代码状态
echo  4. 查看提交历史
echo  5. 退出
echo.
echo =======================
echo.

set /p choice=请选择操作(1-5): 

if "%choice%"=="1" goto push
if "%choice%"=="2" goto pull
if "%choice%"=="3" goto status
if "%choice%"=="4" goto log
if "%choice%"=="5" goto end

echo 输入错误，请重新选择！
timeout /t 2 >nul
goto menu

:push
cls
echo 正在提交本地代码到GitHub...
echo.

git add .

set /p commit_msg=请输入提交信息(默认为"更新代码"): 
if "%commit_msg%"=="" set commit_msg=更新代码

git commit -m "%commit_msg%"
git push origin main

echo.
echo 代码已成功提交到GitHub！
pause
goto menu

:pull
cls
echo 正在从GitHub获取最新代码...
echo.

set /p stash=是否保存当前工作区修改？(Y/N，默认N): 
if /i "%stash%"=="Y" git stash

git pull origin main

if /i "%stash%"=="Y" git stash pop

echo.
echo 代码已成功更新到最新版本！
pause
goto menu

:status
cls
echo 当前代码状态：
echo.
git status
echo.
pause
goto menu

:log
cls
echo 提交历史：
echo.
git log --oneline -n 10
echo.
pause
goto menu

:end
echo 感谢使用Git同步工具！
timeout /t 2 >nul
exit 