import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Multiselect from 'vue-multiselect'
import Vuelidate from 'vuelidate'
import 'materialize-css/dist/js/materialize.min.js'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')

Vue.component('multiselect', Multiselect)

const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.html', 'utf-8', (err, content) => {
    if (err) {
      console.log('Невозможно открыть файл "index.html".')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Сервер запущен на: http://localhost:%s', httpPort)
})