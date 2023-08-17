/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-17 14:46:45
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-17 14:47:18
 * @FilePath: \HCM\src\utils\crypto\index.ts
 * @Description: 加密解密
 */
import CryptoJS from 'crypto-js';

const CryptoSecret = '__CryptoJS_Secret__';

/**
 * 加密数据
 * @param data - 数据
 */
export function encrypto(data: any) {
  const newData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(newData, CryptoSecret).toString();
}

/**
 * 解密数据
 * @param cipherText - 密文
 */
export function decrypto(cipherText: string) {
  const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  if (originalText) {
    return JSON.parse(originalText);
  }
  return null;
}
