/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-17 17:06:18
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 14:02:22
 * @FilePath: \HCM\src\locales\lang\en.ts
 * @Description: 英文语言包
 */
import type { LocaleMessages } from "vue-i18n";

const locale: LocaleMessages<any> = {
  message: {
    system: {
      title: "HCM Management System",
    },
    menu: {
      // 团队
      team: "Team",
      // 人才库
      talentPool: "Talent Pool",
      // 日程
      schedule: "Schedule",
    },
    // 用户中心
    userCenter: "User Center",
    // 退出登录
    logout: "Logout",
    modal: {
      title: "Prompt",
      // 确定
      confirm: "Confirm",
      // 取消
      cancel: "Cancel",
      // 退出登录内容
      logoutContent: "Are you sure you want to log out?",
    },
    loginForm: {
      // 请输入用户名
      usernamePlaceholder: "Please enter your username",
      // 请输入密码
      passwordPlaceholder: "Please enter your password",
      // 记住我
      rememberMe: "Remember me",
      // 忘记密码
      forgetPassword: "Forget password",
      // 立即登录
      loginNow: "Login now",
    },
    loginModel: {
      // 账号登录
      accountLogin: "Account Login",
      // 手机号登录
      phoneLogin: "Phone Login",
      // 注册
      register: "Register",
      // 重置密码
      resetPassword: "Reset Password",
      // 微信绑定
      bindWechat: "Bind Wechat",
    }
  },
};

export default locale;
