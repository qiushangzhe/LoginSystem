## 登录系统（服务端）
mongoose + express

- 服务只负责吐数据，前后端分离设计。
- 路由表：
    - /user/register 注册账号
    - /user/getCaptcha 获取验证码
    - /user/checkCaptcha 检查验证码
    - /user/login 登录
    - /user/checkUsername 检查用户名是否可用

- 后续考虑增加session记录用户登录态，实现固定时间内不需要重复登录。
s%3AKvDZMNb4RPPa8POAdKV8JsCr8P7pYsOu.0GS7z2RqUfMXokxLbVCad9myqjAeJX6MoxNP63lG0gI
