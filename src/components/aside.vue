<template>
  <!-- 模块主文件设置固定的结构 -->

  <div class="left">
    <h1>后台管理</h1>
    <!-- <div class="nav" v-for="(item,index) in menus " :key="index">
      <div slot="title" @click="navcont(index)">
        <span class="" slot="title">{{item.authName}}1111</span>
      </div>
      <ul v-for="(val,idx) in item.children" :key="idx" v-show="index === flag">
        <li>{{val.authName}}
          {{flag}}
        </li>
      </ul>
    </div> -->
    <div class="aside">
      <el-menu background-color="#0000" text-color="#fff">
        <el-submenu v-for="(item, idx) in menus" :key="idx" class="nav-title" :index="String(idx)">
          <template slot="title">
            <span slot="title">{{ item.authName }}</span>
          </template>
          <el-menu-item v-for="(item, idx) in item.children" :key="idx"
            @click="$router.push({ path: item.path, query: { name: item.authName }})">
            {{ item.authName }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>

</template>



<script>
  export default {
    // 项目主文件名称
    props: [],
    components: {},
    data() {
      return {
        flag: 0
      };
    },
    //方法 函数写这里
    methods: {
      navcont(idx) {
        this.flag = idx
      }
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
      this.menus = this.$store.state.user.rights
      console.log(this.menus)
    },
    //页面渲染之前
    beforeMount() {},
    //页面渲染之后
    mounted() {
      this.flag = -1;
    },
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
  .left {
    width: 100%;
    height: 100vh;
    color: #fff;
    background-color: black;
    overflow: hidden;
    transition: width 1s ease;

    h1 {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: teal;
    }
  }
</style>
