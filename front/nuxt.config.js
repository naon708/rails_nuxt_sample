export default {
  // Change the port number from the default port of 3000.
  server: {
    port: 8000
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'http://localhost:3000/api/v1',
      pathRewrite: {'^/api/': ''}
    }
  },

  auth: {
    // cookie: false,
    localStorage: false,
    strategies: {
      local: {
        token: {
          property: 'token',
        },
        endpoints: {
          login: { url: 'api/login', method: 'post' },
          logout: false,
          user: { url: 'api/user', method: 'get' }
        }
      }
    },
    redirect: {
      login: '/login',  // 未ログイン時に認証が必要なページにアクセスした際のリダイレクトURL
      logout: '/',      // ログアウト時のリダイレクトURL
      home: '/myPage',  // ログイン後のリダイレクトURL
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
