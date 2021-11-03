<template>
  <!-- 模块主文件设置固定的结构 -->
  <div class="addcont">
    <div class="addconthe">
      <h3>请输入商品信息</h3>
    </div>
    <div class="addconts">
      <div class="input">
        <span>用户名</span>
        <input type="text" v-model="formdata.proName">
      </div>
      <div class="input">
        <span>分类</span>
        <input type="text" v-model="formdata.column">
      </div>
      <div class="input">
        <span>品牌</span>
        <input type="text" v-model="formdata.brand">
      </div>
      <div class="input">
        <span>Logo</span>
        <input type="text" v-model="formdata.logo">
      </div>
      <div class="input">
        <span>图片</span>
        <input type="text" v-model="formdata.proImg">
      </div>
      <div class="input">
        <span>价格</span>
        <input type="text" v-model="formdata.price">
      </div>
      <div class="input">
        <span>库存</span>
        <input type="text" v-model="formdata.stock">
      </div>
      <div class="input">
        <span>折扣</span>
        <input type="text" v-model="formdata.discount">
      </div>
      <div class="input">
        <span>评分</span>
        <input type="text" v-model="formdata.score">
      </div>
    </div>
    <div class="mabtn">
      <button @click="submitForm(formdata)">提交</button>
      <button @click="resetForm(formdata)">重置</button>
    </div>

  </div>
</template>



<script>
  import {
    updateproListUrl,
    updateActionproListUrl
  } from "@/config/url.js"
  import {
    upshop,
    updatashop,
    addshop
  } from '@/api/shop'
  export default {

    // 项目主文件名称
    props: [],
    components: {},
    data() {
      return {
        formdata: {},
      };
    },
    //方法 函数写这里
    methods: {
      submitForm() {

        console.log(this.formdata)
        updatashop(this.formdata).then((res) => {
          console.log(res)
          this.$router.push('/shop')
        })
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
      console.log("修改数据", this.$store.state.shopId)
      let Id = localStorage.getItem("id")
      upshop(Id).then(response => {
        this.formdata = response.data.cont
        console.log(this.formdata)
      }).catch(error => {
        console.log(error)
      })
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


<style lang='scss' scoped>
  // 使用scss格式
  .addcont {
    width: 100%;
    background: #fff;

    .addconthe {
      h3 {
        width: 100%;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        padding: 0px 10px;
      }
    }

    .addconts {
      width: 100%;
      box-sizing: border-box;
      padding: 0px 100px;
      background: #e5e4e4;
      overflow: hidden;

      .input {
        display: flex;
        align-items: center;
        margin: 20px;

        span {
          width: 100px;
        }

        input {
          width: 300px;
          height: 26px;
        }
      }
    }

    .mabtn {
      height: 50px;
      box-sizing: border-box;
      padding: 5px;
      display: flex;

      button {
        width: 80px;
        height: 40px;
        margin: 0 20px;
        border: none;
        border-radius: 1rem;
      }
    }

  }
</style>
