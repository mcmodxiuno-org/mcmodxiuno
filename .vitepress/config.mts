import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config

// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import Giscus from "./components/Giscus.vue";

export default defineConfig({
  title: "Minecraft 模组修罗场 - 一个 Minecraft 同类模组对比网站",
  description: "可能是世界上第一个 Minecraft 同类模组对比网站",
  lang: "zh",
  cleanUrls: true,
  sitemap: {
    hostname: "https://mcmodxiuno.pages.dev",
    lastmodDateOnly: false,
  },
  lastUpdated: true,

  head: [
    [
      "script",
      {},
      `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "rckh4kgswt");
    `,
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: "local",
    },

    nav: [
      { text: "首页", link: "/" },
      { text: "贡献指南", link: "/CONTRIBUTING" },
      { text: "关于", link: "/about" },
      {
        text: "讨论区",
        link: "https://github.com/mcmodxiuno-org/mcmodxiuno/discussions",
      },
      {
        text: "Issues",
        link: "https://github.com/mcmodxiuno-org/mcmodxiuno/issues",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mcmodxiuno-org/mcmodxiuno" },
    ],

    footer: {
      copyright: "Copyright © 2025-present Minecraft 模组修罗场",
    },
    editLink: {
      pattern: "https://github.com/mcmodxiuno-org/mcmodxiuno/edit/master/:path",
      text: "在 GitHub 编辑",
    },
  },

  locales: {
    root: {
      label: "中文",
      lang: "zh",
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
    },
  },
});
