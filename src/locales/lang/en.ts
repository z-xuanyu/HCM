/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-17 17:06:18
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 10:59:42
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
    }
  },
};

export default locale;
