import { boot } from 'quasar/wrappers'

import wings from 'wings4'
// const wings = require('wings4').default

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

import pdfMake from 'pdfmake/build/pdfmake'
// import pdfFonts from 'pdfmake/build/vfs_fonts'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { reactive } from 'vue'
pdfMake.vfs = pdfFonts.pdfMake.vfs

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router }) => {
  // something to do
  app.use(VueChartkick)
  app.config.globalProperties.$pdfMake = pdfMake

  app.config.globalProperties.$wings = wings('http://localhost:3030')

  app.config.globalProperties.$global = reactive({
    user: null
  })
})
