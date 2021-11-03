<template>
  <!-- 模块主文件设置固定的结构 -->
  <div class="login">
    <div class="loginc">
      <div class="loginh">
        <img
          src="https://s3.bmp.ovh/imgs/2021/10/99d05dc3186fa416.jpeg"
          alt=""
        />
      </div>
      <h2>欢迎登陆</h2>
      <div class="form">
        <div>
          <span>用户名</span>
          <input type="text" v-model="uaerdata.username" />
        </div>
        <div>
          <span>密码</span>
          <input type="text" name="password" v-model="uaerdata.password" />
        </div>
        <div>
          <button @click="loginEnter">登陆</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { initDynamicRouter } from '@/router';
export default {
  // 项目主文件名称
  props: [],
  components: {},
  data() {
    return {
      uaerdata: {
        username: '',
        password: '',
      },
    };
  },
  //方法 函数写这里
  methods: {
    ...mapMutations(['setUser']),
    async loginEnter() {
      console.log(this.uaerdata);
      const res = await this.$http.post('http://127.0.0.1:3001/quanxian', {
        // 携带的数据
        data: this.uaerdata,
      });
      console.log('请求到res数据', res);
      // 登陆后
      // 失败
      if (!res.data.code === 200) {
        this.$message.error('登陆失败，请重新登陆');
      }
      // 成功
      this.$message.success('登录成功准备跳转');
      // 储存到本地，会话级
      this.setUser(res.data);
      initDynamicRouter();
      sessionStorage.setItem('v-user', JSON.stringify(res.data));
      // 跳转首页
      this.$router.push('/');
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

<style lang="scss" scoped>
// 使用scss格式
.login {
  width: 100%;
  height: 100vh;
  background: teal;

  .loginc {
    width: 35%;
    max-height: 49%;
    background: rgba(255, 255, 255, 0.656);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 2rem;

    h2 {
      width: 100%;
      text-align: center;
      margin-top: -3vh;
    }

    .loginh {
      width: 16vh;
      height: 16vh;
      overflow: hidden;
      border-radius: 50%;
      margin-top: -8vh;
      margin-left: -8vh;
      box-shadow: 0 0 10px #000;
      margin-bottom: 0.9rem;

      img {
        width: 20vh;
        margin-top: -4vh;
      }
    }

    .form {
      display: flex;
      width: 100%;
      // max-height: 30vh;
      height: 30vh;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      padding: 10px 100px;
      box-sizing: border-box;

      div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 3vh;

        span {
          width: 20%;
          height: 50px;
          line-height: 50px;
        }

        input {
          flex: 1;
          padding: 5px 10px;
          height: 30px;

          border: 1px solid #ccc;
          border-radius: 1rem;
        }
      }

      div:nth-child(3) {
        justify-content: right;

        button {
          margin-right: 20px;
          width: 100px;
          height: 30px;
          border: none;
          border-radius: 1rem;
        }
      }
    }
  }
}
</style>
