<template>
  <!-- 模块主文件设置固定的结构 -->
  <div class="footer">
    footer
  </div>
</template>



<script>
  export default {
    // 项目主文件名称
    props: [],
    components: {},
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
  .footer {
    width: 100%;
    height: 40px;
    background: turquoise;
    position: absolute;
    bottom: 0;
  }
</style>
