# 查看当前分支（带*号的）
git branch

# 假设当前分支是main，设置跟踪origin/main
git branch --set-upstream-to=origin/main main

# 之后直接拉取即可
git pull