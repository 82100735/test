<template>
  <div class="wrapper">
    主体区域
  </div>
</template>

<script>
import common from './../js/common.js'
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