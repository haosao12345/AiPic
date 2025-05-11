@echo off
chcp 65001 >nul
set "target_folder=D:\W_WrokSpace\CursorAICode\tools\AiDaoHang\AiPic"

echo 开始拉取最新代码...
cd /d "%target_folder%"
git pull
if %errorlevel% equ 0 (
    echo 拉取成功！
) else (
    echo 拉取失败，错误代码：%errorlevel%
)
pause