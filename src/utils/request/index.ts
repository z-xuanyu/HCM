/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-16 17:14:56
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-16 17:18:14
 * @FilePath: \HCM\src\utils\request.ts
 * @Description: 请求封装
 */
import axios, {InternalAxiosRequestConfig, AxiosResponse} from "axios";

const instance = axios.create({
  timeout: 5000,
});

// 请求前拦截
instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // TODO: 请求前相关处理
  (config.headers as any)["Content-Type"] = "text/plain; charset=utf-8";
  return config;
});

// 响应拦截
instance.interceptors.response.use((response: AxiosResponse) => {
  // TODO: 返回数据相关处理
  return response.data;
});

export default instance;
