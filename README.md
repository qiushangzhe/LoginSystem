
## 用户权限管理系统（服务端）
mongoose + express

- 服务只负责吐数据，前后端分离设计。
- 路由表：
    - /user/register 注册账号
    - /user/getCaptcha 获取验证码
    - /user/checkCaptcha 检查验证码
    - /user/login 登录
    - /user/checkUsername 检查用户名是否可用

- 后续考虑增加session记录用户登录态，实现固定时间内不需要重复登录。

## 数据库设计
### 用户表
- username : 用户名
- password : 密码
- email : 邮箱
- permission : 权限
    - 超级管理员 = 1
    - 管理员 = 2
    - 普通用户 = 3
- createTime : 注册时间
- updateTime : 上次登陆时间

### session表
- session
    - login_user : 当前登陆的用户名
