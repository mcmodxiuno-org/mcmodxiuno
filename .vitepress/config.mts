import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minecraft 模组修罗场",
  description: "一个 Minecraft 同类模组对比网站",
  lang: "zh-CN",
  cleanUrls: true,
  sitemap: {
    hostname: "https://mcmodxiuno.pages.dev",
    lastmodDateOnly: false,
  },
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
      { text: "贡献指南", link: "/docs/pr" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mcmodxiuno-org/mcmodxiuno" },
    ],
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
