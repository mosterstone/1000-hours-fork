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
            { text: '1.1. 音素', collapsed: true, link: '/sounds-of-english/01-phonemes',
              items: [
                { text: '1.1.1. 元音', link: '/sounds-of-english/01-1-vowels' },
                { text: '1.1.2. 辅音', link: '/sounds-of-english/01-2-consonants' },
                { text: '1.1.3. 美式语音标注', link: '/sounds-of-english/01-3-us-phonemes' },
                { text: '1.1.4. 示例', link: '/sounds-of-english/01-4-pangram' }
              ]
            },
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
                { text: '2.1.2. ʌ/ɑː', link: '/sounds-of-english/05-Ʌ' },
                { text: '2.1.3. e/æ', link: '/sounds-of-english/06-e' },
                { text: '2.1.4. ə/əː', link: '/sounds-of-english/07-ə' },
                { text: '2.1.5. ɪ/iː', link: '/sounds-of-english/08-i' },
                { text: '2.1.6. ʊ/uː', link: '/sounds-of-english/09-u' },
                { text: '2.1.7. ɔ/ɔː', link: '/sounds-of-english/10-ɔ' },
                { text: '2.1.8. aɪ, eɪ, ɔɪ, aʊ, əʊ, eə, ɪə, ʊə', link: '/sounds-of-english/11-aɪ' },
              ]
            },
            { text: '2.2. 辅音', collapsed: false, link: '/sounds-of-english/12-consonants-overview',
              items: [
                { text: '2.2.1. p, b, m, n, f, k, g, h', link: '/sounds-of-english/13-pbmnfkgh' },
                { text: '2.2.2. f, v', link: '/sounds-of-english/14-fv' },
                { text: '2.2.3. m, n, ŋ', link: '/sounds-of-english/15-mn' },
                { text: '2.2.4. t, d, s, z; ʃ, tʃ, dʒ', link: '/sounds-of-english/16-tdsz' },
                { text: '2.2.5. t, d', link: '/sounds-of-english/17-td' },
                { text: '2.2.6. tr, dr, ts, dz', link: '/sounds-of-english/18-trdr' },
                { text: '2.2.7. sp, st, sk', link: '/sounds-of-english/19-sptk' },
                { text: '2.2.8. h', link: '/sounds-of-english/20-h' },
                { text: '2.2.9. θ, ð', link: '/sounds-of-english/21-θð' },
                { text: '2.2.10. r', link: '/sounds-of-english/22-r' },
                { text: '2.2.11. l', link: '/sounds-of-english/23-l' },
                { text: '2.2.12. ʒ', link: '/sounds-of-english/24-ʒ' },
                { text: '2.2.13. j, w', link: '/sounds-of-english/25-jw' },
              ]
            },            
            { text: '2.3. 连读', link: '/sounds-of-english/26-catenation' },            
            { text: '2.4. 音标学习', link: '/sounds-of-english/27-learning-phonetics' },            
            { text: '2.4. 英美口音选择', link: '/sounds-of-english/28-choosing-accent' },            
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
