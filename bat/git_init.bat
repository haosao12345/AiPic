@echo off
chcp 65001 >nul
title Git仓库初始化工具

echo ====== Git仓库初始化工具 ======
echo.

REM 检查是否已经初始化Git仓库
if exist ".git" (
    echo 当前目录已初始化Git仓库！
    goto setup_remote
) else (
    echo 正在初始化Git仓库...
    git init
    echo Git仓库初始化完成！
)

:setup_remote
echo.
echo 设置远程仓库...

set /p repo_url=请输入GitHub仓库URL: 
if "%repo_url%"=="" (
    echo 错误：请提供有效的GitHub仓库URL！
    goto end
)

REM 设置远程仓库
git remote -v | findstr "origin" > nul
if %errorlevel% equ 0 (
    echo 重置远程仓库origin...
    git remote remove origin
)

git remote add origin %repo_url%
echo 远程仓库已设置为：%repo_url%

:branch_setup
echo.
set /p branch=请输入主分支名称(默认为main): 
if "%branch%"=="" set branch=main

git branch -m %branch%
echo 当前分支已设置为：%branch%

echo.
set /p init_commit=是否创建初始提交？(Y/N，默认Y): 
if /i NOT "%init_commit%"=="N" (
    echo 创建README.md文件...
    echo # 项目说明 > README.md
    git add README.md
    git commit -m "初始化项目"
    echo 初始提交已创建！
)

echo.
set /p push_now=是否立即推送到GitHub？(Y/N，默认N): 
if /i "%push_now%"=="Y" (
    git push -u origin %branch%
    echo 代码已成功推送到GitHub！
)

:end
echo.
echo ==============================
echo Git仓库设置完成！现在可以使用其他脚本来同步代码了。
pause 