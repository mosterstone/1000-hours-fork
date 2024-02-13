import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import footnote from 'markdown-it-footnote'
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import mark from 'markdown-it-mark'
import ins from 'markdown-it-ins'

// import markdownit from 'markdown-it'

export default withMermaid(
  // https://vitepress.dev/reference/site-config
  defineConfig({
    title: "1000 小时",
    description: "用注意力填满 1000 小时就能练成任何你需要的技能……",
    head: [
      [ 'script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-Z2QZPX3T9W' } ],
      [
        'script', {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Z2QZPX3T9W');`
      ]
    ],
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        // { text: 'Examples', link: '/markdown-examples' }
      ],

      sidebar: [
        {
          text: '语音塑造', collapsed: true,
          items: [
            {
              text: '1. 基础', collapsed: true, link: '/sounds-of-english/01-basics',
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
              text: '2. 详解', collapsed: true, link: '/sounds-of-english/03-details',
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
            },
            {
              text: '3. 进阶', collapsed: true, link: '/sounds-of-english/29-advanced',
              items: [
                { text: '3.1 什么更重要？', link: '/sounds-of-english/30-more-important' },
                { text: '3.2 停顿', link: '/sounds-of-english/31-pause' },
                { text: '3.3 高低', link: '/sounds-of-english/32-high-low' },
                { text: '3.4 起伏', link: '/sounds-of-english/33-up-down' },
                { text: '3.5 轻重', link: '/sounds-of-english/34-strong-weak' },
                { text: '3.6 缓急', link: '/sounds-of-english/35-fast-slow' },
              ]
            },
            {
              text: '4. 收官', collapsed: true, link: '/sounds-of-english/36-round-up',
              items: [
                { text: '4.1 流利', link: '/sounds-of-english/37-fluent' },
                { text: '4.2 情绪', link: '/sounds-of-english/38-emotional' },
              ]
            }
          ]
        },
        // {
        //   text: '大脑内部', collapsed: true,
        //   items: [
        //     { text: '1. 小空间大世界', link: '/in-the-brain/01-inifinite' },
        //     { text: '2. 一切都是连接', link: '/in-the-brain/02-links' },
        //     { text: '3. 一切都是体育课', link: '/in-the-brain/03-sports' },
        //     { text: '4. 一切都是语文课', link: '/in-the-brain/04-literature' },
        //     { text: '5. 一切都需要能量', link: '/in-the-brain/05-energy' },
        //     { text: '6. 用进废退循环利用', link: '/in-the-brain/06-use-or-lose' },
        //     { text: '7. 短时间内足量重复', link: '/in-the-brain/07-repitition' },
        //     { text: '8. 新旧网络间的竞争', link: '/in-the-brain/08-compitition' },
        //     { text: '9. 注意不到就不存在', link: '/in-the-brain/09-unnoticed' },
        //     { text: '10. 熟练就是卸载负担', link: '/in-the-brain/10-unloading' },
        //     { text: '11. 被关注是最大负担', link: '/in-the-brain/11-burden' },
        //     { text: '12. 有限排它不可再生', link: '/in-the-brain/12-unreproducible' },
        //     { text: '13. 一切都是化学反应', link: '/in-the-brain/13-chemical' },
        //     { text: '14. 安全阈值决定成果', link: '/in-the-brain/14-threshold' },
        //   ]
        // },
        // {
        //   text: '自我训练', collapsed: true, link: `/self-training/00-overview`,
        //   items: [
        //     { text: '1. 小空间大世界', link: '/in-the-brain/01-inifinite' },
        //   ]
        // },
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/xiaolai/1000-hours' }
      ]
    },

    markdown: {
      // https://vitepress.dev/reference/markdown
      math: true,
      config: (md) => {
        // use more markdown-it plugins!
        md.use(footnote)
        md.use(sub)
        md.use(sup)
        md.use(mark)
        md.use(ins)
      },
      // toc: {
      //   level: [2, 3, 4]
      // }
    }
  })
);
