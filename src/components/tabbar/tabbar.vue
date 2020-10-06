<template>
  <div class="tabbar">
    <router-link :class="[ index===1 ? 'active':'']" to="/index" tag="div">
      <img src="@/assets/imgs/tabbar/shouye.png" alt="">
      <p class="active">首页</p>
    </router-link>
    <router-link :class="[index===2 ? 'active':'']" to="/detail" tag="div">
      <img src="@/assets/imgs/tabbar/yanjing.png" alt="">
      <p>视野</p>
    </router-link>
    <router-link :class="[index===3 ? 'active':'']" to="/index" tag="div">
      <img src="@/assets/imgs/tabbar/wo.png" alt="">
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "tabbar",
    props: {
      index: {
        type: Number,
        default: 1
      }
    }
  }
</script>

<style scoped>
 .tabbar {
   width: 6.4rem;
   padding: 0 .5rem;
   display: flex;
   justify-content: space-between;
   position: fixed;
   bottom: 0;
   background-color: #fff;
   z-index: 9;
 }
  .tabbar div {
    width: 1rem;
    height: 1.2rem;
    position: relative;
    margin-top: .1rem;
    opacity: .5;
  }
 .tabbar div img {
   width: .6rem;
   height: .6rem;
   position: absolute;
   left: 0;
   right: 0;
   margin: 0 auto;
 }
 .tabbar div p {
   text-align: center;
   color: #f19194;
   margin-top: .7rem;
 }
  .tabbar div.active {
    opacity: 1;
    font-weight: bold;
  }
</style>