# Git批处理工具

这个目录包含了一套Git批处理工具，用于简化GitHub代码同步操作。

## 文件说明

1. **git_init.bat** - 初始化Git仓库并设置GitHub远程连接
   - 初始化本地Git仓库
   - 设置GitHub远程仓库
   - 配置分支
   - 创建初始提交（可选）

2. **git_push.bat** - 提交本地代码到GitHub
   - 添加所有更改
   - 输入提交信息
   - 推送到GitHub

3. **git_pull.bat** - 从GitHub获取最新代码
   - 保存当前工作区（可选）
   - 拉取最新代码
   - 恢复工作区（可选）

4. **git_sync.bat** - 综合Git同步工具
   - 提供菜单式操作界面
   - 包含提交、获取、状态查看、历史查看等功能

## 使用方法

1. 首次使用，请先运行 `git_init.bat` 设置仓库连接
2. 日常提交代码，使用 `git_push.bat`
3. 获取最新代码，使用 `git_pull.bat`
4. 需要更多功能，使用 `git_sync.bat`

## 注意事项

- 确保已安装Git并添加到系统环境变量
- 需要有GitHub账号并已配置好SSH密钥或已登录
- 批处理文件默认使用main分支，如需其他分支请修改脚本 