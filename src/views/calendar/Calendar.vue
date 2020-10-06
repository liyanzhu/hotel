<template>
  <div>
    <van-calendar type="range" v-model="show" @confirm="onConfirm" />
  </div>
</template>

<script>
  import { Calendar } from 'vant';
  import 'vant/lib/calendar/style'
  export default {
    name: "Calendar",
    components: {
      'van-calendar': Calendar
    },
    data() {
      return {
        date: '',
        show: true,
      }
    },
    methods: {
      onConfirm(date) {
        let [startTime, endTime] = date;
        let start = startTime.getMonth()+1+'.'+startTime.getDate();
        let end = endTime.getMonth()+1+'.'+endTime.getDate();
        let startDay = startTime.getDay();
        let endDay = endTime.getDay();
        let night = (endTime.getTime()-startTime.getTime())/1000/60/60/24;
        this.$store.commit('setTime', {start, end, startDay, endDay, night})
        this.$router.back();
      },
    }
  }
</script>

<style scoped>

</style>