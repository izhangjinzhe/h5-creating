import Vue from 'vue'

var bus = {
  install: function (V) {
    V.prototype.$bus = new Vue()
  }
}

export default bus
