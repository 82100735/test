<template>
  <div class="slideMenu">
    <div class="slide-on"><strong>≡</strong></div>
    <div class="menu-list">
      <dl class="currOn" v-if="navId==1">
        <dt><img src="../assets/icon.gif" /><span>主控制台1</span></dt>
        <dd>平台管理1</dd>
        <dd>平台管理2</dd>
        <dd>平台管理3</dd>
      </dl>
      <dl v-if="navId==1">
        <dt><img src="../assets/icon.gif" /><span>主控制台2</span></dt>
        <dd>平台管理</dd>
        <dd>平台管理</dd>
      </dl>
      <dl v-if="navId==2">
        <dt><img src="../assets/icon.gif" /><span>商户管理1</span></dt>
        <dd>商户管理</dd>
        <dd>商户管理</dd>
      </dl>
      <dl v-if="navId==2">
        <dt><img src="../assets/icon.gif" /><span>商户管理2</span></dt>
        <dd>商户管理</dd>
        <dd>商户管理</dd>
      </dl>
      <dl v-if="navId==3">
        <dt><img src="../assets/icon.gif" /><span>会员管理1</span></dt>
        <dd>会员管理</dd>
        <dd>会员管理</dd>
      </dl>
      <dl v-if="navId==3">
        <dt><img src="../assets/icon.gif" /><span>会员管理2</span></dt>
        <dd>会员管理</dd>
        <dd>会员管理</dd>
      </dl>
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
        mid: "m1"
    }
  },
  watch:{

  },
  props:["navId"],
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
    currOnFun:function(index){
      this.mid = index;
     
    }
  },
  destroyed(){
    //离开该页面时需要销毁的组件
  }
}
</script>