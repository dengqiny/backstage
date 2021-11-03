<template>
  <!-- 模块主文件设置固定的结构 -->
  <div class="addcont">
    <div class="addconthe">
      <h3>请输入员工信息</h3>
    </div>
    <div class="addconts">
      <div class="input">
        <span>姓名</span>
        <input type="text" v-model="formdata.username">
      </div>
      <div class="input">
        <span>性别</span>
        <input type="text" v-model="formdata.sex">
      </div>
      <div class="input">
        <span>年龄</span>
        <input type="text" v-model="formdata.age">
      </div>
      <div class="input">
        <span>密码</span>
        <input type="text" v-model="formdata.password">
      </div>
      <div class="input">
        <span>图片</span>
        <input type="text" v-model="formdata.proImg">
      </div>
      <div class="input">
        <span>工资</span>
        <input type="text" v-model="formdata.salary">
      </div>
    </div>
    <div class="mabtn">
      <button @click="submitForm">提交</button>
      <button @click="resetForm(formdata)">重置</button>
    </div>

  </div>
</template>
<script>
  import {
    updatestaffListUrl,
    updateActionstaffListUrl
  } from "@/config/url.js"
  import {
    upstaff,
    updatastaff,

  } from '@/api/staff'
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
        updatastaff(this.formdata).then((res) => {
          console.log(res)
          this.$router.push('/staff')
        })

        // const res = await this.$http.post(updateActionstaffListUrl, {
        //   data: this.formdata
        // }).catch(error => {
        //   console.log(error)
        // })
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
      let Id = localStorage.getItem("id")
      console.log(Id)

      upstaff(Id).then(response => {
        this.formdata = response.data.data
        console.log(this.formdata)
      }).catch(error => {
        console.log(error)
      })


      // this.$http({
      //   url: updatestaffListUrl,
      //   method: 'get',
      //   params: {
      //     _id: Id,
      //   }
      // }).then(response => {
      //   this.formdata = response.data.data
      // }).catch(error => {
      //   console.log(error)
      // })
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
