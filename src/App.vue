<template>
  <div id="app" class="themea">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="c-test">
      1111111111111111111111
    </div>
    <div class="a-test">
      2222222222222222222222
    </div>
    <div>
      <button @click="changeTheme">主题切换</button>
    </div>
  </div>
</template>

<script>
import {setTheme} from '@/assets/js/setTheme.js';
export default {
  name: 'app',
  mounted() {
  },
  // created () {
  //   let font_link = document.createElement('link')
  //   font_link.setAttribute('rel','stylesheet')
  //   font_link.setAttribute('type','text/css')
  //   font_link.setAttribute('href','@/assets/theme/dark/element-variables.scss')
  //   document.head.appendChild(font_link)
  // },
  methods: {
    changeTheme () {
      setTheme()
    }
  },
  components: {
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  margin-top: 60px;
}
</style>
