/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-19 14:14:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-12 18:17:38
 */
import { wxRequest, wrapUrl, appid} from '../utils/wxRequest';
import regeneratorRuntime  from '../utils/runtime';

/**
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */

const loginSave = async(params) => {
  let res = await wxRequest(params, wrapUrl('login/save'), 'POST');
  return res;
};


const getCode = () => new Promise((resolve, reject) => {
  wx.login({
    success(res) {
      console.log('code', res);
      resolve(res.code);
    },

    fail: reject
  });
});

// 静默登录
const login = async(params) => {
  let code = await getCode();
  let data = await wxRequest({
    appid: appid,
    code,
    share_friend: params.share_friend
  }, wrapUrl('login/login'), 'GET');
  console.log('data', data);

  wx.setStorageSync('is_userInfo', data.is_userInfo);
  wx.setStorageSync('user_id', data.user_id);
  wx.setStorageSync('ticket', data.ticket);
  wx.setStorageSync('user_identity', data.user_identity);


  if (data.is_userInfo) {  // 老用户
    wx.setStorageSync('name', data.name);
    wx.setStorageSync('avatar', data.avatar);
  }
  console.log('返回成功');
  return data;
};



// 代步车资格验证
const qualificationVerification = (params) => wxRequest(params, wrapUrl('user-personage/qualificationVerification'), 'PUT');  
// 您的车辆
const getQualificationVerification = (params) => wxRequest(params, wrapUrl('user-personage/getQualificationVerification'), 'GET');
// 实名认证(下一步)
const addIdentity = (params) => wxRequest(params, wrapUrl('user-personage/addIdentity'), 'POST');
// 车辆信息认证(下一步)
const addDrivingLicence = (params) => wxRequest(params, wrapUrl('user-personage/addDrivingLicence'), 'POST');


module.exports = {
  qualificationVerification,
  getQualificationVerification,
  addIdentity,
  addDrivingLicence
};