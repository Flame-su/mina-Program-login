var host = 'https://www-tmp.xiongmaopeilian.com';

var config = {
  service:{
    host,
    loginUrl: `${host}/minipro/auth/login`,
    validateCodeUrl: `${host}/minipro/auth/send_validate_code`,
    bindUrl: `${host}/minipro/auth/bind`,
    courseList: `${host}/minipro/course/list`,
    courseDetail: `${host}/minipro/course/{1}`,
    tuneLibs: `${host}/minipro/tune/libs`,
    searchTune: `${host}/minipro/tune/search`,
    uploadTune: `${host}/minipro/tune/upload`
  }
};

module.exports = config;