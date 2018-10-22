<template>
  <div class="register">
    <div class="register-container">
      <div class="register-slide">
        <div class="register-header">
          <div :class="isAccountLogin ? 'tab-qrCode' : 'tab-account'">
            <strong class="qrCode-tips" @click="isAccountLogin=!isAccountLogin">{{isAccountLogin ? "扫码更安全":"账号注册"}}</strong>
          </div>
        </div>
        <div class="register-mind">
          <h1 class="state-tips">{{isAccountLogin ? '账号注册' : '扫码登录'}}</h1>
        </div>
        <div class="register-main">
          <div class="register-account" v-if="isAccountLogin">
            <div class="item-account">
              <img :src="isAccountFocus ? require('../assets/accountCurr.gif') : require('../assets/account.gif')" class="icon" />
              <input type="text" @focus="isAccountFocus=true" @blur="verifyUserId" v-model="userId" name="account" id="account" ref="account" :class="isAccountFocus ? 'account current' : 'account'" />
              <span class="verify">{{uidTips}}</span>
            </div>
            <div class="item-password">
              <img :src="isPwdFocus ? require('../assets/pwdCurr.gif') : require('../assets/pwd.gif')" class="icon" />
              <input type="password" @focus="isPwdFocus=true" @blur="varifyPassword" v-model="pwd" name="password" id="password" ref="password" :class="isPwdFocus ? 'password current' : 'password'" />
              <span class="pwd-tips-icon" v-if="isPwdFocus"></span>
              <span class="verify">{{pwdTips}}</span>
            </div>
            <div class="item-password">
              <img :src="isConfirmPwdFocus ? require('../assets/pwdCurr.gif') : require('../assets/pwd.gif')" class="icon" />
              <input type="password" @focus="isConfirmPwdFocus=true" @blur="varifyConfirmPassword" v-model="confirmPwd" name="confirmPwd" id="confirmPwd" ref="confirmPwd" :class="isConfirmPwdFocus ? 'password current' : 'password'" />
              <span class="pwd-tips-icon" v-if="isPwdFocus"></span>
              <span class="verify">{{confirmPwdTips}}</span>
            </div>
            <div class="item-security">
              <img :src="isSecurityFocus ? require('../assets/securityCurr.png') : require('../assets/security.png')" class="icon" />
              <input type="text" name="kaptcha" placeholder="请输入验证码" :class="isSecurityFocus ? 'checkCode current' : 'checkCode'" id="kaptcha" @focus="isSecurityFocus=true" @blur="varifySecurity" v-model="securityCode" />
              <img id="kaptchaImage" :src="verifyCode" title="换一张" alt="换一张" @click="changeVerifyCode" />
              <span class="verify">{{securityCodeTips}}</span>
            </div>
            <div class="item-help">
              <router-link class="login-now" to="/" replace>已有账号？立即登录</router-link>
            </div>
            <div class="item-sub">
              <input type="button" name="registerNow" id="registerNow" class="registerNow" value="立即注册" @click="registerNow" />
            </div>
          </div>
          <div class="login-qrCode" v-else>
            <img id="qrCode" src="../assets/qrCode.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../css/register.css'
import common from './../js/common.js'

export default {
  data(){
    return{
      //存放各种数据
      server:common.API.globalData.server,
      isAccountLogin:true,
      isAccountFocus:false,
      isPwdFocus:false,
      isConfirmPwdFocus:false,
      isSecurityFocus:false,
      userId:'15915348747',
      uidTips:null,
      pwd:'z123456',
      pwdTips:null,
      confirmPwd:'z123456',
      confirmPwdTips:null,
      securityCode:null,
      securityCodeTips:null,
      verifyCode:'http://syw3436760001.my3w.com/CheckCode.aspx',
      isVerify:true
    }
  },
  watch:{
    //监听元素
  },
  components:{
    //注册组件
  },
  computed:{
    //计算属性
  },
  filters:{
    //过滤器
  },
  mounted:function(){
    //实例化创建完成后，需要执行的某些方法
    this.$nextTick(function(){
        //保证this.$el已经插入文档
        var that = this;
        
    })
  },
  methods:{
    //各种方法
    changeVerifyCode:function(){
      var that = this;
      that.verifyCode = "http://syw3436760001.my3w.com/CheckCode.aspx?random="+Math.random()*10;
    },
    registerNow:function(){
      var that = this;
      if(!that.isVerify){
        return;
      }
      var myParams = {};
      myParams.userId = that.userId;
      myParams.password = that.pwd;
      myParams.checkCode = that.securityCode;
      common.SendAxios({
        url: that.server + "/Ajax/userRegister.ashx",
        type: "post",
        withCredentials: false,
        params:myParams
      },function(res){
        console.log(res.data);
        common.ShowMsg({msg:res.data.msg});
        setTimeout(function(){
          location.href = "/";
        },2000)
        
      },function(err){
        console.log(err);
      })
    },
    verifyUserId:function(){
      var that = this;
      if(common.CheckNull(that.userId) || that.userId == null){
        that.uidTips = "账号不能为空！";
        that.isVerify = false;
        //that.$refs.account.focus();
        return;
      } 
      that.uidTips = "";

      if(!common.CheckPhone(that.userId) && !common.CheckEmail(that.userId)){
        that.uidTips = "账号为手机号或者邮箱！";
        that.isVerify = false;
        //that.$refs.account.focus();
        return;
      }
      
      that.isVerify = true;
      that.isAccountFocus = false;
    },
    varifyPassword:function(){
      var that = this;
      if(common.CheckNull(that.pwd) || that.pwd == null){
        that.pwdTips = "密码不能为空！";
        that.isVerify = false;
        //that.$refs.password.focus();
        return;
      } 

      that.pwdTips = "";
      if(!common.CheckPass(that.pwd)){
        that.pwdTips = "密码至少是6位数且由a-z,0-9组成！";
        that.isVerify = false;
        //that.$refs.password.focus();
        return;
      } 
      that.pwdTips = "";

      that.isVerify = true;
      that.isPwdFocus = false;
    },
    varifyConfirmPassword:function(){
      var that = this;
      if(common.CheckNull(that.confirmPwd) || that.confirmPwd == null){
        that.confirmPwdTips = "请再次输入密码！";
        that.isVerify = false;
        //that.$refs.confirmPwd.focus();
        return;
      } 
      that.confirmPwdTips = "";

      if(!common.CheckPass(that.confirmPwd)){
        that.confirmPwdTips = "密码至少是6位数且由a-z,0-9组成！";
        that.isVerify = false;
        //that.$refs.confirmPwd.focus();
        return;
      } 
      that.confirmPwdTips = "";

      if(that.confirmPwd != that.pwd){
        that.confirmPwdTips = "两次密码输入不一致！";
        that.isVerify = false;
        //that.$refs.confirmPwd.focus();
        return;
      } 
      that.confirmPwdTips = "";

      that.isVerify = true;
      that.isConfirmPwdFocus = false;
    },
    varifySecurity:function(){
      var that = this;
      if(common.CheckNull(that.securityCode) || that.securityCode == null){
        that.securityCodeTips = "验证码不能为空！";
        that.isVerify = false;
        return;
      } 
      that.securityCodeTips = "";
      
      that.isVerify = true;
      that.isSecurityFocus = false;
    }
  },
  destroyed(){
    //离开该页面时需要销毁的组件
  }
}
</script>