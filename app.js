//app.js
var xmcloud = require('./vendor/xmcloud/index');
var config = require('./config');
var utils = require('./utils/util');

App({
  onLaunch: function () {
    xmcloud.setLoginUrl(config.service.loginUrl);
  },
  globalData: {
    userInfo: null
  }
})