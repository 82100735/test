/**
 *global function for website.
 *@author zhangJian
 *@version 1.0.0 build 2017-12-13
 *@modified zhangJian 2017-12-13
 */
var mintUI = require("mint-ui");
var $http = require("axios");
/**
* 截取字符串方法
* 
* @param str
*        传入字符串
* @param num
*        截取的字符串长度
* @return result
*        截取过后的字符串加省略号
*/
function cutWords(str,num){
  var result = str.length > num ? str.substring(0,num) + "...." : str;
  return result;
}

/**
* 检测表单是否为空
* 
* @param str
*        传入字符串
* @return true 或 false
*/
function checkNull(str){
  return /^\s*$/.test(str)
}

/**
* 检测手机号码是否符合规则
* 
* @param num
*        传入电话号码
* @return true 或 false
*/
function checkPhone(num){
  return /^1(3|4|5|7|8)\d{9}$/.test(num);
}

/**
* 检测邮箱格式
* 
* @param str
*        传入字符串
* @return true 或 false
*/
function checkEmail(str){
  return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(str);
}

/**
* 检测密码长度
* 
* @param str
*        传入字符串
* @return true 或 false
*/
function checkPass(passWord){
  return /^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{6,20}$/.test(passWord)
}

/**
* 格式化时间戳
* 
* @param 时间戳
*        传入日期
* @return true 或 false
*/
function dateFormat(timer){
  var date = new Date(timer);
  var y = date.getFullYear();
  var M = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  M = M < 10 ? "0" + M : M;
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  return y + "-" + M + "-" + d + "  " + h + ":" + m + ":" + s;
}

/**
* 日期转化时间戳
* 
* @param date
*        传入日期
* @return timer
*/
function formatDate(date){
  var timer = date != null ? new Date(date) : new Date();
  timer = timer.getTime();
  return timer;
}

/**
* 弹出消息提示
* 
* @param o
*      传入对象
* @return 
*/
function showMsg(o){
  if(o.constructor == Object){
    var _duration = 1500;
    mintUI.Toast({
      message: o.msg,
      iconClass: o.iconClass == undefined ? 'icon' : "icon " + o.iconClass,
      position: o.position == undefined ? 'middle' : o.position,
      duration: o.duration == undefined ? _duration : o.duration
    });
  }
}

/**
 * Axios调用方法
 * 
 * @param o
 * 		  参数对象
 * @param success
 *      成功函数
 * @param fail
 *      失败函数
 * @returns result
 * 		  返回JSON对象
 */
function sendAxios(o, success, fail) {
  var url = o.url;
  var type = o.type || "get";
  var myParams = o.params || {};
  // var withCredentials = o.withCredentials || false;
  // $http.defaults.withCredentials = false;
  $http({
      url: url,
      method: type,
      params: myParams,
  })
  .then(function(result){
      //这里可以写逻辑判断，如果token失效的话  则链接到登陆页面
      if(result.data.code != 0){
        showMsg({msg:result.data.msg});
      }else{
        success(result);
      } 
  })
  .catch(function(error){
      alert("error");
      fail(error)
  })
}

var api=({
  onload:function(){
    //判断是正式接口还是测试接口
    if(this.globalData.env == "test"){
      this.globalData.server = "http://syw3436760001.my3w.com";
      this.globalData.picServer = "http://syw3436760001.my3w.com/";
    }else{
      this.globalData.server = "http://syw3436760001.my3w.com";
      this.globalData.picServer = "http://syw3436760001.my3w.com/";
    }
  },
  globalData:{
      env: "test",
      server: '',
      picServer:'',
  }
})
module.exports = {
  CheckNull: checkNull,
  CheckEmail: checkEmail,
  CheckPhone: checkPhone,
  CheckPass: checkPass,
  ShowMsg: showMsg,
  SendAxios: sendAxios,
  API: api.onload() || api
}