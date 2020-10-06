<template>
  <div class="body">
    <!--<div v-for="(item, index) in provinceKeys" :key="index">-->
      <!--<div class="first">{{item}}</div>-->
      <!--<ul class="city clearfix">-->
        <!--<li class="city-item"-->
            <!--v-for="(city, index) in province[item]"-->
            <!--:key="index"-->
            <!--@click="editCity(city.city)">{{city.city}}</li>-->
      <!--</ul>-->
    <!--</div>-->
    <div v-for="(item, index) in provinceKeys" :key="index">
      <van-index-bar>
        <van-index-anchor :index="item" />
        <van-cell v-for="(city, index) in province[item]"
                  :key="index"
                  :title="city.city"
                  @click="editCity(city.city)"/>
      </van-index-bar>
    </div>
  </div>
</template>

<script>

  import city from '@/lib/city.json'
  export default {
    name: "Province",
    data(){
      return {
        city,
        province: []
      }
    },
    computed: {
      provinceKeys(){
        let arr = [];
        arr = Object.keys(this.province).sort();
        return arr;
      }
    },
    mounted(){
      this.initProvince();
    },
    methods: {
      initProvince(){
        this.city.province.forEach(ele =>{
          let firstCharts = ele.en.charAt(0).toUpperCase();
          if (!this.province[firstCharts]) {
            this.$set(this.province, firstCharts, [])
          }
          this.province[firstCharts].push(ele);
        })
      },
      editCity(city) {
        this.$store.commit('setProvince', city)
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .body {
    background-color: #f7f7f7;
  }
  .first {
    font-size: .6rem;
  }
  .city {
    padding-left: .5rem;
  }
  .city-item {
    float: left;
    width: 1.2rem;
    height: 1rem;
    margin-right: .5rem;
    margin-bottom: .1rem;
    line-height: 1rem;
    text-align: center;
    background-color: #eaeaea;
  }
</style>