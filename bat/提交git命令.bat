@echo off
chcp 65001 >nul
set "target_folder=D:\W_WrokSpace\CursorAICode\tools\AiDaoHang\AiPic"

echo 进入目标文件夹...
cd /d "%target_folder%"

echo 添加所有更改到暂存区...
git add .

set /p commit_message=请输入更新日志: 

echo 提交更改...
git commit -m "%commit_message%"

echo 推送到 GitHub 仓库...
git push origin main

if %errorlevel% equ 0 (
    echo 代码提交和推送成功！
) else (
    echo 代码提交或推送失败，错误代码：%errorlevel%
)
pause 