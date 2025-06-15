// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Giscus from '../components/Giscus.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Giscus', Giscus) // 注册为全局组件
  }
}