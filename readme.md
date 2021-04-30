### 本地项目上传到git
- 创建本地仓库
> 在项目根目录执行 git init
- 添加要提交的代码
> 在项目根目录执行 git add .
- 提交代码到本地仓库
> git commmit -m '项目初始化'
- 连接git仓库
> git remote add origin 'git项目https地址'
> 说明：如果提示fatal:remote origin already exists，先执行git remote rm origin，然后再次执行。

- push到远程仓库
> git push -u origin master
`
说明：
① 这里会要求输入github的账号密码。
② 如果提示You may want to first integrate the remote changes (e.g.,'git pull...') before pushing again.
则说明远程分支存在本地分支中不存在的提交，可以先fetch在merge。
`

### 生成ssh密钥
- 检查之前有没有配置过账户信息
> git config user.name
> git config user.email

- 如果没有配置，则执行一下命令
> git config user.name 'liyefei'
> git config user.email 'liyefei0121@sina.com'
- 生成密钥
> ssh-keygen -t rsa -C 'liyefei0121@sina.com'
> -t 指定密钥类型，默认rsa
> -C 设置注释文字，比如邮箱
> -f 指定密钥文件存储文件名

最后在.ssh目录下(C盘用户文件夹下)得到了两个文件：id_rsa（私有秘钥）和id_rsa.pub（公有密钥）。

- 远程登录
① 登录github，进入Settings-->SSH and GPG keys
② 创建 New SSH key，粘贴上面生成的共有密钥点击Add SSH key











<!-- ------------------------------ -->
`
$ git add README.md //将需要push到远端仓库的文件添加到本地仓库
$ git commit -m ‘first commmit’ //commit，-m表示注释，’ first commmit’为注释内容
$ git remote add origin https://github.com/Addiefly/leetcode.git
$ git remote -v //查看本地的仓库链接
$ git push -u origin master将本地仓库push到远程仓库
`