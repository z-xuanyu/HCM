/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-17 17:06:34
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 11:00:32
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
    }
  },
};

export default locale;