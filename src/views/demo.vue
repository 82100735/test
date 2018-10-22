<template>
  <div class="hello">
    
  </div>
</template>

<script>
// import '../css/index.css'
import common from './../js/common.js'
// import headSelf from '../components/header'
// import footSelf from '../components/footer'
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
    filterLength: function(item){
      if(item.length > 80){
          let str = item.substring(0,80);
          item = str + '...';
          return item;
      }else{
          return item;
      }
    }
  },
  mounted:function(){
    //实例化创建完成后，需要执行的某些方法
    this.$nextTick(function(){
        //保证this.$el已经插入文档
        var that = this;
        var status = that.$route.query.key;
        that.getBanner();
    })
  },
  methods:{
    //各种方法
    getBanner:function(){
      var that = this;
      var param = {};
      common.SendAxios({
        url:that.url,
        params:param,
        type:"post"
      },
      function(res){
          
      },
      function(error){
          console.log(error)
      })
    }
  },
  destroyed(){
    //离开该页面时需要销毁的组件
  }
}
</script>