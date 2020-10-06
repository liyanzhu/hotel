import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

const store = new Vuex.Store({
  //唯一的数据来源
  state: {
    indexSearch: {
      province: '山西',
      address: '',
      startTime: '',
      endTime: '',
      startDay: '',
      endDay: '',
      night: ''
    }
  },
  mutations: {
    setProvince(state, payload) {
      state.indexSearch.province = payload;
    },
    setTime(state, payload) {
      let date = new Date();

      let {start, end, startDay, endDay, night} = payload;
      let startTime = start ? start : date.getMonth()+1 +'.'+ date.getDate();
      let endTime = end ? end : date.getMonth()+1 +'.'+ date.getDate()+2;
      let weekArr = ['Sun','Mon','Tur','Wed','Thu','Fri','Sat'];
      startDay = startDay===undefined?date.getDay():startDay;
      endDay = endDay===undefined?startDay+2:endDay;


      state.indexSearch.startDay = weekArr[startDay];
      state.indexSearch.endDay = weekArr[endDay];
      state.indexSearch.startTime = startTime;
      state.indexSearch.endTime = endTime;
      state.indexSearch.night = night;
    }
  },
  actions: {
    
  },
  plugins: [createPersistedState()],

})

export default store
