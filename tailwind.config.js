/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 16:46:49
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-17 18:16:56
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
    extend: {},
  },
  plugins: [],
}