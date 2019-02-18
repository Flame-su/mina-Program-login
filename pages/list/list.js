// pages/list/list.js
var utils = require('../../utils/util');
var config = require('../../config');
var xmcloud = require('../../vendor/xmcloud/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listInfo:'未获取'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCourseList();
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
  getCourseList: function(){
    utils.showBusy('请求中……');
    var that = this;
    var options = {
      url: config.service.courseList,
      success(response){
        var result = response.data;
        utils.showSuccess('请求成功完成');
        if(result.errors != undefined && result.errors.length > 0 || result.needBind){
          wx.redirectTo({
            url: '/pages/bind/bind',
          });
          return;
        }

        that.setData({
          listInfo: result.courses
        })
      },
      fail(error){
        utils.showModel('请求失败', error);
        wx.redirectTo({
          url: '/pages/bind/bind',
        });
      }
    };
    xmcloud.request(options);
  
  }
})