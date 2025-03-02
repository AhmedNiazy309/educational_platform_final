const webpack = require("webpack");
import { resolve } from 'path'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
    target: 'static',
    mode: "universal",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Education_platform_final',
        htmlAttrs: {
            lang: 'ar'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/node_modules/bootstrap/dist/css/bootstrap.css",
        "~/plugins/DataTables/datatables.min.css",
        "~/assets/style.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "~/plugins/bootstrap.js",
        "~/plugins/bootstrap.min.js",
        { src: '~/plugins/DataTables/datatables.min.js', mode: 'client' },
    ],
alias: {
    'style': resolve(__dirname, './assets/style')
  },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        /**
         * add external plugins
         */
           analyze: true,
    extractCSS: true,
        vendor: ["jquery", "bootstrap"],
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery"
            })
        ],
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                });
            }
        }
    }
}