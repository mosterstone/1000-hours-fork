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
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
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
      }
    }
  })
);
