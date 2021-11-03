<template>
  <div>
    <h2>添加用户 信息</h2>
    <Addusercont></Addusercont>
  </div>
</template>

<script>
  import Addusercont from '@/components/addusercont'
  export default {

    props: [],
    components: {
      Addusercont
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
    width: 95%;
    margin: 0 auto;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    box-sizing: border-box;
  }
</style>
