/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-18 14:35:58
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 13:59:50
 * @FilePath: \HCM\src\constants\business.ts
 * @Description: 业务相关常量
 */
export const loginModuleLabels: Record<UnionKey.LoginModule, string> = {
    'pwd-login': 'message.loginModel.accountLogin',
    'code-login': 'message.loginModel.phoneLogin',
    register: 'message.loginModel.register',
    'reset-pwd': 'message.loginModel.resetPassword',
    'bind-wechat': 'message.loginModel.bindWechat'
  };