<template>
  <div class="login">
    <div class="login-container">
      <div class="login-slide">
        <div class="login-header">
          <div :class="isAccountLogin ? 'tab-qrCode' : 'tab-account'">
            <strong class="qrCode-tips" @click="isAccountLogin=!isAccountLogin">{{isAccountLogin ? "扫码更安全":"账号登录"}}</strong>
          </div>
        </div>
        <div class="login-mind">
          <h1 class="state-tips">{{isAccountLogin ? '账号登录' : '扫码登录'}}</h1>
        </div>
        <div class="login-main">
          <div class="login-account" v-if="isAccountLogin">
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
            <div class="item-help">
              <router-link class="register-now" to="/register" replace>没有账号？立即注册</router-link>
            </div>
            <div class="item-sub">
              <input type="button" name="loginNow" id="loginNow" class="loginNow" value="登录" @click="loginNow" />
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
import '../css/login.css'
import common from './../js/common.js'

export default {
  data(){
    return{
      //存放各种数据
      server:common.API.globalData.server,
      isAccountLogin:true,
      isAccountFocus:false,
      isPwdFocus:false,
      userId:null,
      uidTips:null,
      pwd:null,
      pwdTips:null,
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
    loginNow:function(){
      var that = this;
      if(!that.isVerify){
        return;
      }
      var myParams = {};
      myParams.userId = that.userId;
      myParams.password = that.pwd;
      common.SendAxios({
        url: that.server + "/Ajax/userlogin.ashx",
        type: "post",
        params: myParams
      },function(res){
        common.ShowMsg({msg:res.data.msg});
        //这里可以将token缓存到本地，待操作登录成功后的页面时再用
        location.href = "/system";
      },function(err){
        alert("2222")
        console.log(err);
      })
    },
    verifyUserId:function(){
      var that = this;
      if(common.CheckNull(that.userId)){
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
      that.uidTips = "";

      that.isVerify = true;
      that.isAccountFocus = false;
    },
    varifyPassword:function(){
      var that = this;
      if(common.CheckNull(that.pwd)){
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
    }
  },
  destroyed(){
    //离开该页面时需要销毁的组件
  }
}
</script>