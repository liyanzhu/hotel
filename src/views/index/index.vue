<template>
  <div class="box">
    <!--头部-->
    <div class="header">
      <div class="banner">
        <van-swipe  class="header-swipe my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in banners" :key="index">
            <router-link  :to="{name: 'detail',query:{sid: item.sid}}">
              <img :src="item.sthumb" :alt="item.sname" title="">
            </router-link>
          </van-swipe-item>
        </van-swipe>
        <!--<img src="@/assets/imgs/index/banner1.png" alt="">-->
      </div>
      <div class="search">
        <div class="search-city">
          <router-link to="/province">{{indexSearch.province}}</router-link>
          <input type="text" placeholder="景点 地点 关键词">
          <a href="">定位</a>
        </div>
        <div class="search-money">
          <router-link tag="div" to="/calendar" style="font-size: .7rem;display: inline-block">{{indexSearch.startTime}}</router-link>
          <span style="color: #ed757a">{{indexSearch.startDay}}</span>
          <span style="font-size: .4rem;">-></span>
          <span style="font-size: .7rem;display: inline-block">{{indexSearch.endTime}}</span>
          <span style="color: #ed757a">{{indexSearch.endDay}}</span>
          <span style="margin-left: .2rem;">共{{indexSearch.night}}晚</span>
        </div>
        <div class="search-btn">
          <button>立即查找</button>
        </div>
      </div>
    </div>
    <!--优选-->
    <div class="pro">
      <div class="cname">
        <strong>
          <span>优选</span>
          <span class="cname-color">PRO</span>
        </strong>
      </div>
      <div class="cdesc">
        <span>每一套都是性价比优质房源</span>
      </div>
      <div class="pro-show">
        <div class="pro-show-one">
          <img src="@/assets/imgs/index/PRO.png" alt="">
        </div>
        <div class="pro-show-two"></div>
        <div class="pro-show-three"></div>
      </div>

      <div class="more">
        <div class="more-point"></div>
      </div>
    </div>

    <!--不得不睡-->
    <div class="sleep" v-if="sleep">
      <div class="cname">
        <strong>
          <span>{{sleep.cname.substring(0,3)}}</span>
          <span class="cname-color">{{sleep.cname.substring(3,4)}}</span>
        </strong>
      </div>
      <div class="cdesc">
        <span>{{sleep.cdesc}}</span>
      </div>
      <div>
        <van-swipe class="sleep my-swipe" :autoplay="3000" indicator-color="white">
          <router-link :to="{name: 'detail',query:{sid: item.sid}}" v-for="(item,index) in sleep.children" :key="index">
          <van-swipe-item >
            <div class="sleep-img">
            <img :src="IMGURL + item.sthumb" alt="">
            </div>
            <div class="sleep-cname">
            <span>{{item.sname}}</span>
            </div>
            <div class="sleep-cdesc">
            <span>{{item.sdesc}}</span>
            </div>
            <div v-for="(stag,index) in item.stag.split(/,|，/)" :key="index"  class="label" style="background-color: #ed757a;margin-left: 0.48rem; margin-right: -.2rem;">
            <div class="label-box">{{stag}}</div>
            </div>
          </van-swipe-item>
          </router-link>
        </van-swipe>
      </div>
    </div>
    <!--不得不说-->
    <div class="talk" v-if="talk">
      <div class="cname">
        <strong>
          <span>{{talk.cname.substring(0,3)}}</span>
          <span class="cname-color">{{talk.cname.substring(3,4)}}</span>
        </strong>
      </div>
      <div class="cdesc">
        <span>每一段都是我与它的爱恨情仇</span>
      </div>
      <div class="talk-show">
        <div class="talk-left">
          <img :src="IMGURL + talk.children[0].sthumb" alt="">
        </div>
      </div>

    </div>
    <!--不得不看-->
    <div class="look" v-if="look">
      <div class="cname">
        <strong>
          <span>{{look.cname.substring(0,3)}}</span>
          <span class="cname-color">{{look.cname.substring(3,4)}}</span>
        </strong>
      </div>
      <div class="cdesc">
        <span>{{look.cdesc}}</span>
      </div>
      <div class="look-show">
        <div class="look-item" v-for="(item,index) in look.children" :key="index">
          <div class="look-img">
            <img :src="IMGURL + item.sthumb" alt="">
          </div>
          <div class="look-name"><span>{{item.sname}}</span></div>
          <div class="look-address"><span>{{item.scity}}-{{item.sarea}}</span></div>
          <div class="look-score"><van-rate v-model="item.score" readonly/></div>
          <div class="look-price"><span>{{item.sprice}}</span></div>
        </div>
      </div>
      <div class="more">
        <div class="more-point"></div>
      </div>
    </div>

    <tabbar/>
  </div>

</template>

<script>
  import {getIndex} from "../../network/home";
  import {IMGURL} from '@/lib/base.js'
  import tabbar from '@/components/tabbar/tabbar.vue'

  export default {
    name: "index",
    components: {
      tabbar
    },
    data() {
      return {
        IMGURL,
        look: '',
        sleep: '',
        talk: '',
        score: '',
        active: 0,
        banners: []
      }
    },
    computed: {
      indexSearch() {
        return this.$store.state.indexSearch;
      }
    },
    mounted(){
      // this.initSearch();
      this.getIndex();
    },
    methods: {
      // initSearch(){
      //   this.$store.dispatch('setTime');
      //   this.$store.dispatch('setProvince', '北京');
      // },
      getIndex() {
        getIndex().then(res =>{
          console.log(res);
          let banner = res.data.banner;
          banner = banner.map(ele => {
            ele.sthumb = IMGURL + ele.sthumb;
            return ele;
          });
          this.banners = banner;

          let category = res.data.category;
          this.look = category[4];
          this.sleep = category[2];
          this.talk = category[3];
          // console.log(category);
        })
      }
    }
  }
</script>

<style scoped>
  /deep/ .van-tabbar--fixed {
    z-index: 9;
  }
  /deep/ .van-tabbar-item--active{
    color: #f19194;
  }
  /deep/ .van-swipe__indicator.van-swipe__indicator--active {
    background-color: #f19194!important;
  }
  .sleep /deep/ .my-swipe .van-swipe-item {
    line-height: 0;
    text-align: left;
    width: 310px;
    height:230px;
    padding-top: 0;
    /*background-color: #f8f8f8;*/
    box-shadow: 0 0 5px #dedfe2;
    border-radius: 10px;
    transform: translateZ(0);
  }

   /deep/ .van-swipe__indicators  {
    top: 250px!important;
     margin: 0 auto;
     /*margin-top: 0.45rem;*/
     width: 3.6rem;
     height: 0.64rem;
     display: flex;
     justify-content: center;
     align-items: center;
     background: #f8f8f8;
  }
  /deep/ .van-swipe__indicator {
    background-color: #ff8784;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 5.79rem;
    line-height: 5.79rem;
    text-align: center;
    transform: translateZ(0);
  }
  .header{
    width: 7.5rem;
    height: 8.35rem;
    position: relative;
  }

  .banner{
    width: 7.5rem;
    height: 5.79rem;
  }
  .banner img{
    width: 7.5rem;
    height: 5.79rem;
  }

  .search{
    width: 6.1rem;
    height: 3.7rem;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0.55rem;
    right: 0.55rem;
    padding: .3rem;
    border-radius: .1rem;
    box-shadow: 0 0 5px #c8c9cc;
    /*padding: 1rem;*/
  }
  .search-city a:nth-of-type(1){
    color: #ed757a;
    font-size: .4rem;
  }
  .search-city input{
    border: none;
    height: .4rem;
    outline: none;
    margin-left: .6rem;
  }
  .search-city a:nth-of-type(2) {
    color: #333;
  }
  .search-btn button {
    margin-top: .5rem;
    width: 6rem;
    height: 1rem;
    background-color: #ed757a;
    border: none;color:#fff;
    font-size: .5rem;
    box-shadow: 0px 0px 10px #e77676;;
  }

  /*    优选pro*/
  .pro{
    width: 6.4rem;
    height: 6.5rem;
    /*background: darkseagreen;*/
    padding-top: 0.8rem;
    margin: 0 auto;
  }

  .cname{
    height: 0.52rem;
    font-size: 0.36rem;
    color: rgba(0,0,0,0.9);

  }
  .cname-color{
    color: #ed757a;
  }

  .cdesc{
    height: 0.74rem;
    line-height: 0.26rem;
    font-size: 0.26rem;
    color: rgba(0,0,0,0.7);
  }

  .pro-show{
    height: 4.05rem;
    position: relative;
    background: #ffffff;
    overflow: hidden;
  }
  .pro-show-one{
    width: 5.9rem;
    height: 4.05rem;
    position: absolute;
    border-radius: 0.06rem;
    background: #f9d1d2;
    z-index: 3;
  }
  .pro-show-one img{
    width: 5.9rem;
    height: 4.05rem;
  }

  .pro-show-two{
    width: 6.15rem;
    height: 3.57rem;
    position: absolute;
    top: 0.48rem;
    border-radius: 0.06rem;

    background: #f19194;
    z-index: 2;
  }
  .pro-show-three{
    width: 6.4rem;
    height: 3.09rem;
    position: absolute;
    border-radius: 0.06rem;
    top: 0.96rem;
    background: #f9d1d2;
    z-index:1;
  }

  .more{
    margin: 0 auto;
    margin-top: 0.45rem;
    width: 3.6rem;
    height: 0.64rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f8f8;
  }

  .more-point{

    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
    background: #f19194;
    float: left;

  }

  .more:before{
    content: '';
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
    margin-right: 0.16rem;
    background: #f9d1d2;
    display: inline-block;

  }
  .more:after{
    content: '';
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
    margin-left: 0.16rem;
    background: #f9d1d2;
    display: inline-block;

  }

  /*    sleep不得不睡*/
  .sleep{
    width: 6.4rem;
    height: 5.8rem;
    margin: 0 auto;
  }

  .sleep-show{
    height: 4.2rem;
    background: #f8f8f8;
    margin-right: 0.4rem;
  }

  .sleep-img{
    width: 100%;
    height: 2.3rem;
    border-radius: 1rem;
    margin-right: 0.4rem;
  }
  .sleep-img img{
    width: 100%;
    height: 2.3rem;
    border-radius: 5px;
  }

  .sleep-cname{
    margin-top: 10px;
    margin-left: 0.48rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.3rem;
    font-weight: bold;
    opacity: 0.7;
    color: #000;
  }

  .sleep-cdesc{
    margin-left: 0.48rem;
    margin-right:0.48rem;
    width: 4.34rem;
    height: 0.82rem;
    font-size: 0.2rem;
    text-align: left;
    line-height: 0.3rem;
    letter-spacing: 0.02rem;
    opacity: 0.4;
    color: #333;
  }

  .label{
    width: 0.8rem;
    height: 0.38rem;
    margin-right: 0.22rem;
    border-radius: 0.1rem 0.19rem 0.19rem 0.1rem;
    text-align: center;
    justify-content: center;
    font-size: 0.18rem;
    float: left;
    line-height: 0.38rem;
  }


  /*    不得不说*/
  .talk{
    width: 6.4rem;
    height: 4.78rem;
    padding-top: 1.2rem;
    margin: 0 auto;
  }
  .talk-show{
    width: 6.4rem;
    height: 2.88rem;
    margin: 0 auto;
  }
  .talk-left{
    width: 2.88rem;
    height: 2.88rem;
    float: left;
  }
  .talk-left img{
    border-radius: 5px;
  }

  /*    不得不看*/
  .look{
    width: 6.4rem;
    padding-top: 0.64rem;
    padding-bottom: 1.3rem;
    margin: 0 auto;
  }
  .look-show{
    width: 6.4rem;
    height: 8.88rem;
    /*background: #f9d1d2;*/
  }

  .look-item{
    width: 3.03rem;
    height: 4.44rem;
    margin-right: 0.15rem;
    float: left;
  }

  .look-item .look-img{
    width: 3.03rem;
    height: 2.28rem;
    background: white;
  }

  .look-img img{
    width: 3.03rem;
    height: 2.28rem;
    border-radius: 5px;
  }
  .look-item .look-name{
    height: 0.5rem;
    font-size: 0.4rem;
    padding-top: 0.24rem;
    line-height: 0.26rem;
  }

  .look-item .look-address{
    height: 0.38rem;
    /*padding-top: 0.2rem;*/
    font-size: 0.18rem;
    /*line-height: 0.18rem;*/
  }
  .look-item .look-score{
    height: 0.4rem;
    /*padding-top: 0.16rem;*/
  }

  .look-item .look-price{
    height: 0.38rem;
    font-weight: bold;
    font-size: 0.24rem;
    line-height: 0.24rem;

    color: #fe5e5a;
  }
  .look-item .look-price:before{
    content: 'RMB   ';
    font-size: 0.14rem;
    color: #fe5e5a;
    height: 50%;
  }

  .look-item .look-price:after{
    content: '   每晚';
    color: #000000;
    font-size: 0.18rem;
    height: 60%;
  }
</style>