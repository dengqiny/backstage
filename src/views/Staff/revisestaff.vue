<template>
  <!-- 模块主文件设置固定的结构 -->
  <div>
    <h2>修改商品信息</h2>
    <Modifystaff></Modifystaff>
  </div>
</template>



<script>
  import Modifystaff from '@/components/modifystaff'
  export default {
    // 项目主文件名称
    props: [],
    components: {
      Modifystaff
    },
    data() {
      return {};
    },
    //方法 函数写这里
    methods: {},
    //计算属性
    computed: {},
    //侦听器
    watch: {},
    //过滤器
    filters: {},
    //以下是生命周期
    //组件创建之前
    beforeCreate() {},
    //组件创建之后
    created() {},
    //页面渲染之前
    beforeMount() {},
    //页面渲染之后
    mounted() {},
    //页面视图数据更新之前
    beforeUpdate() {},
    //页面视图数据更新之后
    updated() {},
    //页面销毁之前
    beforeDestroy() {},
    //页面销毁之后
    destroyed() {},
  };
</script>


<style lang='scss' scoped>
  // 使用scss格式
  h2 {
    width: 95%;
    margin: 0 auto;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    box-sizing: border-box;
  }
</style>
