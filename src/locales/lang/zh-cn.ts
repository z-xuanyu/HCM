/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-17 17:06:34
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 13:59:25
 * @FilePath: \HCM\src\locales\lang\zh-cn.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { LocaleMessages } from "vue-i18n";

const locale: LocaleMessages<any> = {
  message: {
    system: {
      title: "HCM管理系统",
    },
    menu: {
      // 团队
      team: "团队",
      // 人才库
      talentPool: "人才库",
      // 日程
      schedule: "日程",
    },
    // 用户中心
    userCenter: "用户中心",
    // 退出登录
    logout: "退出登录",
    modal: {
      title: "提示",
      // 确定
      confirm: "确定",
      // 取消
      cancel: "取消",
      // 退出登录内容
      logoutContent: "确定退出登录吗?",
    },
    loginForm: {
      // 请输入用户名
      usernamePlaceholder: "请输入用户名",
      // 请输入密码
      passwordPlaceholder: "请输入密码",
      // 记住我
      rememberMe: "记住我",
      // 忘记密码
      forgetPassword: "忘记密码",
      // 立即登录
      loginNow: "立即登录",
    },
    loginModel: {
      // 账号登录
      accountLogin: "账号登录",
      // 手机号登录
      phoneLogin: "手机号登录",
      // 注册
      register: "注册",
      // 重置密码
      resetPassword: "重置密码",
      // 微信绑定
      bindWechat: "微信绑定",
    }
  },
};

export default locale;