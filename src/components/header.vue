<template>
  <!-- 模块主文件设置固定的结构 -->

  <div class="header">
    <span>{{ userdata.username }}</span>
    <button class="headerbtn" @click="deluser">退出</button>
  </div>
</template>

<script>
export default {
  // 项目主文件名称
  props: [],
  components: {},
  data() {
    return {
      userdata: [],
    };
  },
  //方法 函数写这里
  methods: {
    deluser() {
      sessionStorage.clear();
      location.reload();
      this.$router.push('/login');
    },
  },
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
  created() {
    this.userdata = this.$store.state.user;
  },
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

<style lang="scss" scoped>
// 使用scss格式
.header {
  width: 100%;
  height: 50px;
  background: teal;

  display: flex;
  justify-content: right;
  align-items: center;

  .headerbtn {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 1rem;
  }

  span {
    margin-right: 60px;
    font-size: 18px;
  }
}
</style>
