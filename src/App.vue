<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
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

<style lang="scss">
// 此处无scoped导入的样式作用于全局
// resetcss 这个是必有的 因为要初始化一些W3C难看的样式
@import './assets/scss/reset.scss';
// 一些高频的样式 写在base.scss里面 比如 左浮动 右浮动  清除浮动等
@import './assets/scss/base.scss';
// 一些函数式要传值的 写在mixin里面
@import './assets/scss/mixin.scss';
// &在sass内是父元素

// 模态框的样式
// 弹出框的样式
@import './assets/scss/modal.scss';
// 弹出框按钮的样式
@import './assets/scss/button.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
