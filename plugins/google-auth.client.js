import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gAuthOptions = {
  clientId: '110767231107-f2021ktq0thtk2i3vfhkdiekpvnj06sl.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(GAuth, gAuthOptions)
