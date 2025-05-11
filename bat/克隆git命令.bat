@echo off
chcp 65001 >nul
set "repo_url=git@github.com:yourusername/your-repo.git"
set "target_folder=D:\W_WrokSpace\CursorAICode\tools\AiDaoHang\AiPic"

if not exist "%target_folder%\.git" (
    echo 目标文件夹不是 Git 仓库，开始克隆...
    git clone %repo_url% "%target_folder%"
    if %errorlevel% equ 0 (
        echo 克隆成功！
    ) else (
        echo 克隆失败，错误代码：%errorlevel%
    )
) else (
    echo 目标文件夹是 Git 仓库，开始拉取最新代码...
    cd /d "%target_folder%"
    git pull
    if %errorlevel% equ 0 (
        echo 拉取成功！
    ) else (
        echo 拉取失败，错误代码：%errorlevel%
    )
)
pause