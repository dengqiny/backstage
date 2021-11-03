<template>
  <div>
    <h2>添加商品信息</h2>
    <Addshopcont></Addshopcont>
  </div>
</template>

<script>
  import Addshopcont from '@/components/addshopcont'
  export default {

    props: [],
    components: {
      Addshopcont
    },
    data() {
      return {

      };
    },

    methods: {},

    computed: {},

    watch: {},

    filters: {},

    beforeCreate() {},

    created() {},

    beforeMount() {},

    mounted() {},

    beforeUpdate() {},

    updated() {},

    beforeDestroy() {},

    destroyed() {},
  }
</script>


<style lang='scss' scoped>
  h2 {
    width: 100%;
    margin: 0 auto;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 1px solid #cccc;
  }
</style>
