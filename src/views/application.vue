<template>
  <div class="application">
    <headerSelf></headerSelf>
    <div class="container">
      <slideMenu navId="4"></slideMenu>
      <router-view />
    </div>
  </div>
</template>

<script>
import '../css/globalStyle.css'
import common from './../js/common.js'
import headerSelf from '../components/header'
import slideMenu from '../components/slideMenu'
export default {
  data(){
    return{
      //存放各种数据
      navId:1
    }
  },
  watch:{
    
  },
  components:{
    headerSelf,slideMenu
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