/*
 * @Author: your name
 * @Date: 2021-02-07 09:12:55
 * @LastEditTime: 2021-02-09 15:29:04
 * @LastEditors: sueRimn
 * @Description: In User Settings Edit
 * @FilePath: \Scooter\pages\index\index.js
 */
// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Helelo World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    active: 1,
  },
  onReady: function (e) {
    
  },
  // 事件处理函数
  beginOrder() {
    wx.navigateTo({
      url: '/pages/making/index'
    })
  },
  moveToLocation() {
    this.selectComponent('#map').moveToLocation();
  },
  onLoad() {
    
  },
})
