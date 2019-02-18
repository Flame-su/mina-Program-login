// pages/bind/bind.js
var xmcloud = require('../../vendor/xmcloud/index');
var utils = require('../../utils/util');
var config = require('../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
     mobile:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  mobileinput: function(e){
    this.setData({
      mobile: e.detail.value
    });
  },
  bindValidCode: function(){
    var mobile = this.data.mobile;
    var options = {
      url: config.service.validateCodeUrl,
      login: false,
      method: 'POST',
      data: {
        'mobile': mobile
      },
      success(response){
        console.log(response)
        var result = response.data;
        if(result.errors != undefined){
          var errMsg = result.errors[0].err_msg;
          utils.showModel('警告',errMsg);
          return;
        }
      },
      fail(error){
        console.log(error);
      }
    };

    xmcloud.request(options);
  },
  bindPhone: function(e){
    var mobile = e.detail.value.mobile;
    var code = e.detail.value.code;

    utils.showBusy('绑定中……');
    var options = {
      url: config.service.bindUrl,
      method: 'POST',
      data:{
        'mobile': mobile,
        'code': code
      },
      success(response){
        var result = response.data;
        if(result.errors != undefined && result.errors.length > 0){
          utils.showModel('绑定失败，请重试', result.errors[0].err_msg);
          return;
        }
        utils.showSuccess('绑定成功');
        wx.redirectTo({
          url: '/pages/list/list',
        });

      },
      fail(error){
        console.log(error);
        utils.showModel('绑定失败', error);
      }
    }

    xmcloud.request(options);
  }
})