
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minecraft 模组修罗场",
  description: "一个 Minecraft 同类模组对比网站",
  lang: 'zh-CN',
  cleanUrls: true,
  sitemap: {
	  hostname: 'https://mcmodxiuno.netlify.app',
	  lastmodDateOnly: false
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },
    
    nav: [
      { text: '首页', link: '/' },
      { text: '贡献指南', link: '/docs/pr' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AkarinLiu/mcmodxiuno' }
    ],
  }
})
