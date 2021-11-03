<template>
  <div>
    <h2>添加员工信息</h2>
    <Addstaffcont></Addstaffcont>
  </div>
</template>

<script>
  import Addstaffcont from '@/components/addstaffcont'
  export default {

    props: [],
    components: {
      Addstaffcont
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
