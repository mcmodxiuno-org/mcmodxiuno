import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config

// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";

export default defineConfig({
  
  lang: "zh",
  cleanUrls: true,
  sitemap: {
    hostname: "https://mcmodxiuno.org.cn",
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
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "没有找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
  },

  locales: {
    root: {
      label: "中文",
      lang: "zh",
      link: "/",
      title: "Minecraft 模组修罗场",
      description: "可能是世界上第一个 Minecraft 同类模组对比网站",
      themeConfig: {
        
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
      lastUpdatedText: "上次更新",
      outlineTitle: "目录",
      },
    },
    en: {
      title: "Minecraft Mod Xiuno",
      description: "Maybe the world's first Minecraft mod comparison site",
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
          nav: [
        { text: "Home", link: "/" },
        { text: "Contributing", link: "/CONTRIBUTING" },
        { text: "About", link: "/about" },
        {
          text: "Disscussions",
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
        copyright: "Copyright © 2025-present Minecraft Mod Xiuno",
      },
      editLink: {
        pattern: "https://github.com/mcmodxiuno-org/mcmodxiuno/edit/master/:path",
        text: "Edit in GitHub",
      },
      lastUpdatedText: "Last Updated",
      outlineTitle: "Table of Contents",
      },
    },
  },
});
