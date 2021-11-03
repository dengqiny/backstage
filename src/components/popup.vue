<template>
  <!-- 弹出模态框的子组件  封装完毕，看下后面是否能将大量的函数进行封装-->
  <!-- 模块主文件设置固定的结构 -->
  <!-- 过度标签 -->
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span v-on:click="$emit('cancel')">{{title}}</span>
          <!-- v-on:click="$emit('cancel')"父子之间的传值获取到父组件传过来的 cancel函数 点击模态框消失-->
          <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <!-- 插槽父组件上的p标签会在此处显示 -->
          <slot name="body" class="body"></slot>
        </div>
        <div class="modal-footer">
          <!-- 父子之间的传值获取到父组件传过来的 cancel函数点击模态框消失-->
          <!--  btnType由父组件传过来的btnType进行判断是否显示或者隐藏-->
          <a href="javascript:;" v-if="btnType==2" v-on:click="$emit('cancel')" class="btn">{{cancelText}}</a>
          <a href="javascript:;" v-if="btnType==1" v-on:click="$emit('cancel')" class="btn">{{sureText}}</a>

          <!-- 执行函数determine -->
          <a href="javascript:;" v-if="btnType==3" v-on:click="$emit('cancel')" class="btn">{{cancelText}}</a>
          <a href="javascript:;" v-if="btnType==3" v-on:click="determinefn" class="btnenter">{{sureText}}</a>

        </div>
      </div>
    </div>

  </transition>
</template>



<script>
  export default {
    // 项目主文件名称
    props: {
      list: {
        type: Array,
        default () {
          return [1, 2];
        }
      },
      // 接受父组件传输过来的函数
      method: {
        type: Function
      },
      // 弹框标题怎么获取到标题
      title: String,
      // 按钮类型1 确定按钮 2 取消按钮 3  确定和取消按钮都有
      btnType: String,
      // 确定按钮
      sureText: {
        type: String,
        default: "是"
      },
      // 取消按钮
      cancelText: {
        type: String,
        default: "否" //默认值
      },
      //点击的id
      ID: {
        type: String
      },
      // 弹出框状态
      showModal: Boolean,
    },
    components: {},
    data() {
      return {
        value: "1"
      };
    },
    //方法 函数写这里
    methods: {
      determinefn() {
        console.log('来到组件的determine里面了')
        console.log(this.method)
        this.$emit('determinefn', this.method)

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
</style>
