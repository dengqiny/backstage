<template>
  <!-- 模块主文件设置固定的结构 -->
  <div id="cont">
    <div class="contleft">
      <v-aside></v-aside>
    </div>
    <div class="contright">
      <v-header></v-header>
      <div class="conts">
        <v-main></v-main>
      </div>
      <v-footer></v-footer>
    </div>


  </div>
</template>



<script>
  import Aside from '@/components/aside.vue'
  import header from '@/components/header.vue'
  import footer from '@/components/footer.vue'
  import main from '@/components/main.vue'
  export default {
    // 项目主文件名称
    props: [],
    components: {
      "v-aside": Aside,
      "v-header": header,
      "v-footer": footer,
      "v-main": main,
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
  #cont {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;

    .contleft {
      width: 200px;
      height: 100%;

    }

    .contright {
      flex: 1;
      overflow: hidden;
      position: relative;

      .conts {
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        height: 100vh;
        background: yellowgreen;
      }
    }


  }
</style>
