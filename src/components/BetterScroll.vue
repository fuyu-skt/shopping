<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    init() {
      this.bs = new BScroll(".wrapper", {
        scrollX: true,
        click: true,
        probeType: 3 // listening scroll hook
      });
    }
  },
  mounted() {

     this.init();
  },
  beforeDestroy() {},
  watch: {},
  computed: {}
};
</script>

<style lang='scss'>
</style>