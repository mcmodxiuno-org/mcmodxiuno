<!-- .vitepress/theme/components/Giscus.vue -->
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const giscusContainer = ref(null)
const giscusScriptLoaded = ref(false)

// 配置参数（直接使用你的配置）
const giscusConfig = {
  src: 'https://giscus.app/client.js',
  'data-repo': 'mcmodxiuno-org/mcmodxiuno',
  'data-repo-id': 'R_kgDOOa7qeQ',
  'data-category': '评论区',
  'data-category-id': 'DIC_kwDOOa7qec4CrhhG',
  'data-mapping': 'pathname',
  'data-strict': '0',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-input-position': 'bottom',
  'data-theme': 'preferred_color_scheme',
  'data-lang': 'zh-CN',
  'data-loading': 'lazy',
  crossorigin: 'anonymous',
  async: true
}

// 加载 Giscus 脚本
const loadGiscus = () => {
  if (!giscusScriptLoaded.value) {
    const script = document.createElement('script')
    Object.entries(giscusConfig).forEach(([key, value]) => {
      if (key === 'src') {
        script.src = value
      } else if (key === 'async') {
        script.async = value
      } else {
        script.setAttribute(`data-${key}`, value)
      }
    })
    document.head.appendChild(script)
    giscusScriptLoaded.value = true
  }
}

// 清理 Giscus 元素
const cleanupGiscus = () => {
  const iframe = document.querySelector('iframe.giscus-frame')
  if (iframe) iframe.remove()
}

// 初始加载和路由变化时重新加载
onMounted(() => {
  loadGiscus()
})

watch(() => route.path, () => {
  cleanupGiscus()
  if (giscusContainer.value) {
    // 重新创建容器元素
    const newContainer = document.createElement('div')
    newContainer.className = 'giscus'
    giscusContainer.value.replaceWith(newContainer)
    giscusContainer.value = newContainer
    
    // 重新加载脚本
    loadGiscus()
  }
})
</script>

<template>
  <div class="giscus" ref="giscusContainer"></div>
</template>

<style scoped>
.giscus {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>