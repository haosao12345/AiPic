@echo off
chcp 65001 >nul
echo 正在提交本地代码到GitHub...

REM 添加所有更改到暂存区
git add .

REM 提示用户输入提交信息
set /p commit_msg=请输入提交信息(默认为"更新代码"): 
if "%commit_msg%"=="" set commit_msg=更新代码

REM 提交更改
git commit -m "%commit_msg%"

REM 推送到远程仓库
git push origin main

echo 代码已成功提交到GitHub！
pause 