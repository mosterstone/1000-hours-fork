import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import footnote from 'markdown-it-footnote'

// import markdownit from 'markdown-it'

export default withMermaid(
  // https://vitepress.dev/reference/site-config
  defineConfig({
    title: "1000 Hours",
    description: "Pay your attention into 1000 hours, and you can master anything you need.",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Examples', link: '/markdown-examples' }
      ],
  
      sidebar: [
        {
          text: '1. 语音基础',
          collapsed: false,
          items: [
            { text: '1.1. 音素', link: '/sounds-of-english/01-phonemes' },
            { text: '1.2. 音节', link: '/sounds-of-english/02-syllables' }
          ]
        },
        {
          text: '2. 语音详解',
          collapsed: false,
          items: [
            { text: '2.1. 元音', collapsed: false, link: '/sounds-of-english/03-vowels-overview',
              items: [
                { text: '2.1.1. 口腔内气流共鸣位置', link: '/sounds-of-english/04-vowel-positions' },
                { text: '2.1.2. ʌ/ɑː', link: '/sounds-of-english/05-Ʌ' }
              ]
            },
            
          ]
        }
      ],
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    },

    markdown: {
      // https://vitepress.dev/reference/markdown
      math: true,
      config: (md) => {
        // use more markdown-it plugins!
        md.use(footnote)
      },
      // toc: {
      //   level: [2, 3, 4]
      // }
    }
  })
);
