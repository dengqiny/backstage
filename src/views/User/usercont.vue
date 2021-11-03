<template>
  <!-- 模块主文件设置固定的结构 -->
  <div class="cont">
    <div class="conthe">
      <div class="conth">
        <h2>
          <span> 用户列表</span>
          <button @click="adduser" v-if="user.buttonadd">添加用户</button>
          <button @click="delall" v-if="user.Nuclearmissile">核按钮</button>
        </h2>
        <div class="search">
          <input type="text" v-model="search">
          <button @click="searchshop" v-if="user.buttonfind">查询</button>
        </div>
      </div>
    </div>
    <div class="contcenter">
      <ul class="trherder">
        <li class="al">序号</li>
        <li>用户名</li>
        <li>密码</li>
        <li>图片</li>
        <li class="libtn" v-if="user.buttonedit">操作</li>
      </ul>
      <ul v-for="(item,index) in tabledata" :key="index">
        <li class="al" width="200px">{{item._id}}</li>
        <li>{{item.username}}</li>
        <li>{{item.password}}</li>
        <li><img :src="item.proImg" alt=""></li>
        <li class="libtn" v-if="user.buttonedit">
          <button @click="handleEdit(index,item._id)" style="background:#426ab3" v-if="user.buttonedit">编辑</button>
          <button @click="pretreatmentfn(index,item._id)" style="background:red" v-if="user.buttondel">删除</button>
        </li>
      </ul>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum" :page-sizes="[4,6,8,10]" :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, jumper" :total="total">
      </el-pagination>
    </div>
    <!-- <button @click="reviseuser">编辑yonghu </button> -->
    <motaikuang btnType="3" @cancel='canelfu' v-bind:showModal="show" :method='del' @determinefn='determinefn'
      :title="titledata._id">
      <template v-slot:body>
        <p>是否删除{{titledata.username}}，删除后将不复存在</p>
      </template>
    </motaikuang>
  </div>
</template>



<script>
  import {
    updateuserListUrl,
  } from "@/config/url.js"
  import motaikuang from "@/components/popup.vue";
  import {
    getuser,
    searchuser,
    deleteuser,
    upuser
  } from '@/api/user'
  export default {
    // 项目主文件名称
    props: [],
    components: {
      motaikuang
    },
    data() {
      return {
        queryInfo: {
          query: '',
          pagenum: 1,
          pagesize: 4
        },
        tabledata: [],
        search: "",
        total: 0,
        user: {},
        del: function () {},
        titledata: {},
        show: false, // 设置显示隐藏默认状态，默认是隐藏.需要将状态存入全局或者其他方式
      };
    },
    //方法 函数写这里
    methods: {
      adduser() {
        this.$router.push('/user/adduser')
      },
      // 数据请求
      // 封装的axios请求
      Requestdata() {
        getuser().then((res) => {
          console.log(res)
          let arr = res.data.data;
          this.total = arr.length;
          this.tabledata = arr.slice((parseInt(this.queryInfo.pagenum) - 1) * this.queryInfo.pagesize, this
            .queryInfo.pagenum *
            this.queryInfo.pagesize);
          // console.log(this.tabledata)
        })
      },
      // 搜索请求
      searchshop() {
        searchuser(this.search).then((res) => {
          let arr = res.data.data;
          this.total = arr.length;
          this.tabledata = arr.slice((parseInt(this.queryInfo.pagenum) - 1) * this.queryInfo.pagesize, this
            .queryInfo.pagenum *
            this.queryInfo.pagesize);
          console.log(res.data.data)
        })
      },
      // 编辑请求数据
      handleEdit(index, data) {
        // 参数传入参数1索引，2，点击当前组件上的数据
        localStorage.setItem("id", data)
        console.log(this.$store.state.shopId)
        this.$store.commit('proshopId', data);
        this.$router.push('/user/reviseuser')
      },


      // 删除数据预处理
      pretreatmentfn(index, data) {
        // 将ID保存全局

        this.$store.commit('proshopId', data);
        // 将methods内的函数保存到data内
        this.del = this.handleDelete
        // console.log(this.del)
        // 改变模态框的状态，让模态框显示
        this.show = !this.show;
        // 是否需要在预处理的时候将使用id获取到对应的数据，将数据传输到子组件
        // 数据请求
        upuser(data).then(response => {
          this.titledata = response.data.data
          console.log(this.titledata)
        }).catch(error => {
          console.log(error)
        })
        // 渲染到模态框上
      },

      // 删除数据
      handleDelete(id) {
        deleteuser(id).then(response => {
          // 删除后重新加载
          this.Requestdata()
        }).catch(error => {
          console.log(error)
        })
      },
      canelfu() {
        // 让模态框隐藏
        this.show = false
      },

      //  点击确定后执行的函数
      determinefn(ops) {
        // 将handleDelete这个函数传入子组件后在传入父组件，进行调用
        // 获取到全局id传入函数，函数获取到数据进行删除
        ops(this.$store.state.shopId)
        // 删除完毕后将模态框隐藏
        this.show = false
      },


      // 分页
      handleCurrentChange(newpagenum) {
        // 显示那位页面的数据
        this.queryInfo.pagenum = newpagenum;
        this.Requestdata();
      },
      // 让每页数据显示几条
      handleSizeChange(newpagesize) {
        this.queryInfo.pagesize = newpagesize
        this.Requestdata();
      },
      delall() {
        console.log(1)
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
      this.Requestdata()
      this.user = this.$store.state.user;
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

  .cont {
    box-sizing: border-box;
    background: #ffff;
    width: 100%;
    max-height: 95vh;
    box-sizing: border-box;

    .conthe {

      display: flex;
      justify-content: left;
      align-items: center;


    }

    .conth {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      margin: 0 auto;
      font-size: 20px;
      padding: 0.5rem;
      box-sizing: border-box;

      h2 {
        display: flex;
        justify-content: left;
        align-items: center;
      }

      button {
        margin-left: 20px;
        width: 100px;
        height: 40px;
        border: none;
        border-radius: 1rem;
        background: teal;
      }

      .search {
        width: 300px;
        display: fles;

        input {
          flex: 1;
          height: 26px;
          padding: 1rem;
          box-sizing: border-box;
          border-radius: 0.3rem;
          border: 1px solid #ccc;
        }
      }
    }

    .contcenter {
      width: 100%;
      max-height: 600px;
      background: #ffff;
      overflow: hidden;
      padding: 1rem;
      box-sizing: border-box;
      margin-top: 10px;

      .trherder {
        margin-bottom: 10px;
      }

      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        box-sizing: border-box;
        margin-bottom: 10px;

        li {
          box-sizing: border-box;
          width: 80px;

          img {
            width: 20px;
          }
        }

        .al {
          box-sizing: border-box;
          width: 200px !important;
        }

        .libtn {

          width: 100px;

          button {
            width: 35px;
            height: 20px;
            font-size: 12px;
            border: none;
            margin: 5px;
            color: #ffff;
            border-radius: 0.3rem;
          }

        }
      }

      .addlibtn {
        height: 40px;
      }
    }

  }
</style>
