/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-17 14:23:47
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-18 16:35:17
 * @FilePath: \HCM\src\settings\theme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { themeAnimateModeOptions } from "/@/constants/system";
const themeColorList = [
  "#1890ff",
  "#409EFF",
  "#007AFF",
  "#5ac8fa",
  "#5856D6",
  "#536dfe",
  "#646cff",
  "#9c27b0",
  "#AF52DE",
  "#0096c7",
  "#00C1D4",
  "#34C759",
  "#43a047",
  "#7cb342",
  "#c0ca33",
  "#78DEC7",
  "#e53935",
  "#d81b60",
  "#f4511e",
  "#fb8c00",
  "#ffb300",
  "#fdd835",
  "#6d4c41",
  "#546e7a",
];

const defaultThemeSetting: Theme.Setting = {
  darkMode: false, // 默认深色模式
  layout: {
    minWidth: 900,
  },
  scrollMode: "content",
  themeColor: themeColorList[0], // 默认主题色
  themeColorList, // 主题色列表
  isCustomizeInfoColor: false, // 是否自定义 info 颜色
  otherColor: {
    info: "#2080f0",
    success: "#52c41a",
    warning: "#faad14",
    error: "#f5222d",
  },
  showReload: true, // 是否显示刷新按钮
  header: {
    inverted: false,
    height: 56,
    crumb: {
      visible: true,
      showIcon: true,
    },
  },
  footer: {
    visible: true,
    fixed: false,
    right: true,
    height: 48,
    inverted: false,
  },
  page: {
    animate: true,
    animateMode: "fade-slide",
    animateModeList: themeAnimateModeOptions,
  },
} as Theme.Setting;

export const themeSetting = defaultThemeSetting;
