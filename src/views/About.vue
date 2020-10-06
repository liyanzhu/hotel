<template>
  <div class="about">
    <h1>{{city}}</h1>
    <h2>{{msgCom}}</h2>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'About',
    data(){
      return {
        msg: ''
      }
    },
    components: {
    },
    // computed: mapState({
    //   city: 'city'
    // }),
    computed: {
      msgCom() {
        return this.msg + 1;
      },
      ...mapState([
          // city: state=> state.city
        'city',
      ])
    }
  }
</script>