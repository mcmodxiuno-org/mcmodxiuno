<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useData } from 'vitepress'

const route = useRoute()
const { isDark } = useData()
const giscusContainer = ref(null)
let giscusLoaded = false

// 配置参数
const giscusConfig = {
  'repo': 'mcmodxiuno-org/mcmodxiuno',
  'repo-id': 'R_kgDOOa7qeQ',
  'category': '评论区',
  'category-id': 'DIC_kwDOOa7qec4CrhhG',
  'mapping': 'pathname',
  'strict': '0',
  'reactions-enabled': '1',
  'emit-metadata': '0',
  'input-position': 'bottom',
  'theme': 'preferred_color_scheme',
  'lang': 'zh-CN',
  'loading': 'lazy'
}

// 获取当前主题
const getGiscusTheme = () => {
  return isDark.value ? 'dark' : 'light'
}

// 加载 Giscus
const loadGiscus = () => {
  if (giscusLoaded) return
  
  window.giscus_config = {
    ...giscusConfig,
    theme: getGiscusTheme()
  }

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  
  // 设置所有 data-* 属性
  Object.entries(giscusConfig).forEach(([key, value]) => {
    script.setAttribute(`data-${key}`, value)
  })
  
  // 设置主题属性
  script.setAttribute('data-theme', getGiscusTheme())
  
  giscusContainer.value.appendChild(script)
  giscusLoaded = true
}

// 更新主题
const updateTheme = (theme) => {
  const iframe = document.querySelector('iframe.giscus-frame')
  if (!iframe) return
  
  iframe.contentWindow.postMessage(
    { giscus: { setConfig: { theme } } },
    'https://giscus.app'
  )
}

// 清理 Giscus
const cleanupGiscus = () => {
  const iframe = document.querySelector('iframe.giscus-frame')
  if (iframe) iframe.remove()
  giscusLoaded = false
}

// 初始加载
onMounted(() => {
  loadGiscus()
})

// 路由变化时重新加载
watch(() => route.path, () => {
  cleanupGiscus()
  loadGiscus()
})

// 主题变化时更新
watch(() => isDark.value, (newVal) => {
  updateTheme(getGiscusTheme())
})

// 组件卸载时清理
onUnmounted(() => {
  cleanupGiscus()
})
</script>

<template>
  <div class="giscus-container" ref="giscusContainer"></div>
</template>

<style scoped>
.giscus-container {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>