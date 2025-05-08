@echo off
chcp 65001 >nul
echo 正在从GitHub获取最新代码...

REM 保存当前工作区的修改（可选）
git stash

REM 从远程仓库拉取最新代码
git pull origin main

REM 恢复之前保存的修改（可选）
git stash pop

echo 代码已成功更新到最新版本！
pause 