// @ts-check

const META_URL = 'https://pinia.vuejs.org'
const META_TITLE = 'Pinia 🍍'
const META_DESCRIPTION =
  'Un Store intuitif, sûr, léger et flexible pour Vue'
const META_IMAGE = 'https://pinia.vuejs.org/social.png'

const isProduction = process.env.NODE_ENV

/**
 * @type {import('vitepress').UserConfig['head']}
 */
const productionHead = [
  [
    'script',
    {
      src: 'https://unpkg.com/thesemetrics@latest',
      async: '',
      type: 'text/javascript',
    },
  ],
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Pinia',
  lang: 'en-US',
  description: 'Le Vue Store que vous aurez plaisir à utiliser',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Pinia',
      description: 'Le Vue Store que vous aurez plaisir à utiliser',
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],

    [
      'meta',
      { name: 'wwads-cn-verify', content: '5878a7ab84fb43402106c575658472fa' },
    ],

    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: META_URL,
      },
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: META_TITLE,
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: META_DESCRIPTION,
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: META_IMAGE,
      },
    ],
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:url',
        content: META_URL,
      },
    ],
    [
      'meta',
      {
        property: 'twitter:title',
        content: META_TITLE,
      },
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content: META_DESCRIPTION,
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: META_IMAGE,
      },
    ],

    [
      'link',
      {
        rel: 'preload',
        href: '/dank-mono.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
      },
    ],

    ...(isProduction ? productionHead : []),
  ],

  themeConfig: {
    repo: 'vuejs/pinia',
    logo: '/logo.svg',
    docsDir: 'packages/docs',
    docsBranch: 'v2',

    editLinks: true,

    algolia: {
      appId: '69Y3N7LHI2',
      apiKey: '45441f4b65a2f80329fd45c7cb371fea',
      indexName: 'pinia',
    },

    carbonAds: {
      carbon: 'CEBICK3I',
      custom: 'CEBICK3M',
      placement: 'routervuejsorg',
    },

    locales: {

      '/': {
        label: 'Français',
        selectText: 'Langues',
        nav: [
          { text: 'Guide', link: '/introduction.html' },
          { text: 'API', link: '/api/' },
          // { text: 'Config', link: '/config/' },
          // { text: 'Plugins', link: '/plugins/' },
          {
            text: 'Links',
            items: [
              {
                text: 'Discussions',
                link: 'https://github.com/vuejs/pinia/discussions',
              },
              {
                text: 'Chat',
                link: 'https://chat.vuejs.org',
              },
              {
                text: 'Twitter',
                link: 'https://twitter.com/posva',
              },
              {
                text: 'Changelog',
                link: 'https://github.com/vuejs/pinia/blob/v2/packages/pinia/CHANGELOG.md',
              },
            ],
          },
        ],

        sidebar: [
          {
            text: 'Introduction',
            children: [
              {
                text: "Qu'est-ce que Pinia ?",
                link: '/introduction.html',
              },
              {
                text: 'Pour commencer',
                link: '/getting-started.html',
              },
            ],
          },
          {
            text: 'Core Concepts',
            children: [
              { text: 'Définir un Store', link: '/core-concepts/' },
              { text: 'State', link: '/core-concepts/state.html' },
              { text: 'Getters', link: '/core-concepts/getters.html' },
              { text: 'Actions', link: '/core-concepts/actions.html' },
              { text: 'Plugins', link: '/core-concepts/plugins.html' },
              {
                text: 'Stores outside of components',
                link: '/core-concepts/outside-component-usage.html',
              },
            ],
          },
          {
            text: 'Server-Side Rendering (SSR)',
            children: [
              {
                text: 'Vue and Vite',
                link: '/ssr/',
              },
              {
                text: 'Nuxt.js',
                link: '/ssr/nuxt.html',
              },
            ],
          },
          {
            text: 'Cookbook',
            link: '/cookbook/',
            children: [
              {
                text: 'Migration depuis Vuex ≤4',
                link: '/cookbook/migration-vuex.html',
              },
              {
                text: 'Remplacement du module chaud',
                link: '/cookbook/hot-module-replacement.html',
              },
              {
                text: 'Essais',
                link: '/cookbook/testing.html',
              },
              {
                text: 'Utilisation sans setup()',
                link: '/cookbook/options-api.html',
              },
              {
                text: 'Stores de composition',
                link: '/cookbook/composing-stores.html',
              },
              {
                text: 'Migration de v0/v1 vers v2',
                link: '/cookbook/migration-v1-v2.html',
              },
            ],
          },
        ],
      },
    },
  },
}
