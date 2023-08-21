/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 16:46:49
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 14:17:54
 * @FilePath: \HCM\tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./electron/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--primary-color))',
      primary_hover: 'rgb(var(--primary-color-hover))',
      primary_pressed: 'rgb(var(--primary-color-pressed))',
      primary_active: 'rgba(var(--primary-color-active),0.1)',
      primary_1: 'rgb(var(--primary-color1))',
      primary_2: 'rgb(var(--primary-color2))',
      primary_3: 'rgb(var(--primary-color3))',
      primary_4: 'rgb(var(--primary-color4))',
      primary_5: 'rgb(var(--primary-color5))',
      primary_6: 'rgb(var(--primary-color6))',
      primary_7: 'rgb(var(--primary-color7))',
      primary_8: 'rgb(var(--primary-color8))',
      primary_9: 'rgb(var(--primary-color9))',
      info: 'rgb(var(--info-color))',
      info_hover: 'rgb(var(--info-color-hover))',
      info_pressed: 'rgb(var(--info-color-pressed))',
      info_active: 'rgb(var(--info-color-active),0.1)',
      success: 'rgb(var(--success-color))',
      success_hover: 'rgb(var(--success-color-hover))',
      success_pressed: 'rgb(var(--success-color-pressed))',
      success_active: 'rgb(var(--success-color-active),0.1)',
      warning: 'rgb(var(--warning-color))',
      warning_hover: 'rgb(var(--warning-color-hover))',
      warning_pressed: 'rgb(var(--warning-color-pressed))',
      warning_active: 'rgb(var(--warning-color-active),0.1)',
      error: 'rgb(var(--error-color))',
      error_hover: 'rgb(var(--error-color-hover))',
      error_pressed: 'rgb(var(--error-color-pressed))',
      error_active: 'rgb(var(--error-color-active),0.1)',
      dark: '#18181c'
    },
    extend: {},
  },
  plugins: [],
}