<template>
  <div class="header">
    <div class="header-logo">
      <a href="/system"><img src="../assets/logo.gif" /></a>
    </div>
    <div class="header-nav">
      <ul>
        <li><router-link to="/system">主控制台</router-link></li>
        <li><router-link to="/merchants">商户管理</router-link></li>
        <li><router-link to="/member">会员管理</router-link></li>
        <li><router-link to="/application">移动应用</router-link></li>
        <li><router-link to="/terminal">终端管理</router-link></li>
        <li><router-link to="/platform">平台管理</router-link></li>
        <li><router-link to="/data">大数据分析</router-link></li>
      </ul>
    </div>
    <div class="header-info">
      <ul>
        <li class="welcome"><img src="../assets/user.gif" />老人与海，欢迎您</li>
      </ul>
    </div>
  </div>
</template>

<script>
import '../css/globalStyle.css'
import common from './../js/common.js'
export default {
  data(){
    return{
      //存放各种数据
    }
  },
  watch:{
    
  },
  components:{
    // headSelf,footSelf
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

    })
  },
  methods:{
    //各种方法
  },
  destroyed(){
    //离开该页面时需要销毁的组件
  }
}
</script>