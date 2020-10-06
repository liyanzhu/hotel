<template>
  <div class="home">
    <!--轮播图-->
    <div v-if="stayhome">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in stayhome.sbanner" :key="index">
          <img :src="item"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--content-->
    <div class="content">
      <div class="title">
        <h2>初见 温馨 醉美民宿</h2>
        <span>无接触入住</span>
        <span>已消毒</span>
        <ul class="items">
          <li>整套酒店式公寓</li>
          <li>一室一厅</li>
          <li>一厨一卫</li>
          <li>配备齐全</li>
          <li>宜住两人</li>
        </ul>
      </div>
      <div class="time">
        <div class="time-top">
          <span>入住</span>
          <span>离店</span>
        </div>
        <div class="time-time">
          <span>5.17</span>
          <span>SUN</span>
          <span></span>
          <span>5.19</span>
          <span>TUES</span>
        </div>
      </div>
      <div class="char">新手立减 今日特价 连住优惠</div>
      <div class="discounts">
        <span>九折优惠</span>
        <span>满100减5</span>
      </div>
      <div>
        <ul class="classify">
          <li class="classify-active">详情</li>
          <li>评价</li>
          <li>须知</li>
          <li>推荐</li>
        </ul>
        <div class="classify-content">
          <p>三亚旅行之家</p>
          <p>房间特点:高层看海景离海近,看最美日落, -首歌的距离就能抵达三亚湾椰梦长廊,也是三亚看日落的最佳地点，晚上漫步海边,吹吹海风,昂望星空.</p>
          <p style="color:#f19194;">查看更多</p>
        </div>
      </div>
    </div>
    <!--home-->
    <div class="house">
      <div class="bright">
        <h2>房屋亮点</h2>
        <ul>
          <li>
            <img src="@/assets/imgs/home/icon.png" alt="">
            <p>洗漱用品齐全</p>
            <p>提供牙刷、毛巾、卫生纸、香皂等</p>
          </li>
          <li>
            <img src="@/assets/imgs/home/icon.png" alt="">
            <p>洗漱用品齐全</p>
            <p>提供牙刷、毛巾、卫生纸、香皂等</p>
          </li>
          <li>
            <img src="@/assets/imgs/home/icon.png" alt="">
            <p>洗漱用品齐全</p>
            <p>提供牙刷、毛巾、卫生纸、香皂等</p>
          </li>
        </ul>
      </div>
      <div class="notice">
        <h2>预定须知</h2>
        <div>
          <span>在线押金</span><span>200元离店后原路退回</span>
        </div>
        <div>
          <span>清 洁 费</span><span> 您将免费享受房东提供的客房清洁服务</span>
        </div>
        <div>
          <span>发票说明</span><span>民宿开具发票，点击进入发票说明页</span>
        </div>
        <div>
          <span>退订规则</span><span>退还您全部费用</span>
        </div>
      </div>
      <div class="notice">
        <h2>入住须知</h2>
        <div>
          <span>入住时间</span><span>15:00后入住 12:00前退房</span>
        </div>
        <div>
          <span>接待时间</span><span>00:00-24:00</span>
        </div>
        <div>
          <span>卫生打扫</span><span>一客一扫</span>
        </div>
        <div>
          <span>房东要求</span><span>请把这里当初自己的家就好</span>
        </div>
      </div>
      <div class="look">
        <h2>房屋推荐</h2>
        <div class="look-show">
          <div class="look-item">
            <div class="look-img">
              <img src="@/assets/imgs/index/look-1.png" alt="">
            </div>
            <div class="look-name"><span>3W house</span></div>
            <div class="look-address"><span>北京市.顺义区</span></div>
            <div class="look-score"><van-rate v-model="value" /></div>
            <div class="look-price"><span>109.00</span></div>
          </div>
          <div class="look-item">
            <div class="look-img">
              <img src="@/assets/imgs/index/look-1.png" alt="">
            </div>
            <div class="look-name"><span>3W house</span></div>
            <div class="look-address"><span>北京市.顺义区</span></div>
            <div class="look-score"><van-rate v-model="value" /></div>
            <div class="look-price"><span>109.00</span></div>
          </div>
          <div class="look-item">
            <div class="look-img">
              <img src="@/assets/imgs/index/look-1.png" alt="">
            </div>
            <div class="look-name"><span>3W house</span></div>
            <div class="look-address"><span>北京市.顺义区</span></div>
            <div class="look-score"><van-rate v-model="value" /></div>
            <div class="look-price"><span>109.00</span></div>
          </div>
          <div class="look-item">
            <div class="look-img">
              <img src="@/assets/imgs/index/look-1.png" alt="">
            </div>
            <div class="look-name"><span>3W house</span></div>
            <div class="look-address"><span>北京市.顺义区</span></div>
            <div class="look-score"><van-rate v-model="value" /></div>
            <div class="look-price"><span>109.00</span></div>
          </div>
        </div>
        <div class="more">
          <div class="more-point"></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import {stayhomeOne} from '@/network/home.js'
  import {IMGURL} from "@/lib/base";
export default {
  name: 'Detail',
  components: {
  },
  data() {
    return {
      value: 3,
      stayhome: null,
      recommend: []
    };
  },
  mounted(){
    let sid = this.$route.query.sid;
    this.initStayHomeOne(sid);
  },
  methods: {
    initStayHomeOne(sid){
      stayhomeOne(sid).then(res =>{
        console.log(res);
        this.recommend = res.recommend;
        let stayhome = res.stayhome;
        stayhome.sbanner = stayhome.sbanner.split(/,|，/);
        stayhome.sbanner = stayhome.sbanner.map(ele =>{
          ele = IMGURL + ele
          return ele;
        })
        stayhome.stag = stayhome.stag.split(/,|，/);
        this.stayhome = stayhome;
        console.log(this.stayhome);
      });
    }
  }
}
</script>

<style scoped>
  .my-swipe img {
    width: 100%;
    height: 4rem;
  }
  .content, .house {
    padding: 5vw;
  }
  .title span{
    display: inline-block;
    color: white;
    padding: 3px 8px;
    font-size: 14px;
    margin-top: 2vw;
  }
  .title span:nth-of-type(1){
    background-color: #ffbb2c;
    margin-right: 5vw;
    border-radius:0 5vw 5vw 0;
  }
  .title span:nth-of-type(2){
    background-color: #ff55a2;
    border-radius:0 5vw 5vw 0;
  }
  .time-top {
    color: #777;
    font-size: .2rem;
  }
  .time-top span:nth-child(1){
    margin-right: 4rem;
  }
  .items{
    margin-top: 5vw;
    width: 100%;
    height: 1.5rem;
    background-color: #f8f8f8;
  }
  .items li{
    float: left;
    width: 25%;
    margin-top: .3rem;
    font-size: .2rem;
  }
  .items li:nth-child(4n), .items li:nth-child(n){
    margin-left: 6vw;
    margin-right: 1vw;
  }
  .char{
    font-size: 18px;
    color: #5a5a5a;
  }
  .discounts span{
    display: inline-block;
    color: #f19194;
    font-weight: bold;
    border: 1px solid rgba(248, 78, 165, 0.2);
    font-size: 14px;
    padding: 1vw;
    margin-right: 3vw;
  }
  .classify{
    display: flex;
    justify-content: space-between;
    margin-top: .5rem;
  }
  .classify li {
    width: 1.3rem;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
  }
  .classify-active {
    background-color: #f19194;
    border-radius: 1.2rem;
    color: white;
    box-shadow: 0 0 .2rem #f19194;
  }
  .classify-content {
    margin-top: .3rem;
    color: #5a5a5a;
    font-size: .3rem;
  }
  .bright ul{
    margin-top: .2rem;
    display: flex;
    justify-content: space-around;
  }
  .bright ul li{
    width: 100px;
  }
  .bright ul li img {
    width: 80px;
  }
  .bright ul li p:nth-of-type(1) {
    font-size: .3rem;
  }
  .bright ul li p:nth-of-type(2) {
    font-size: .1rem;
    color: #5a5a5a;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
  .notice {
    margin-top: .5rem;
    /*opacity: .8;*/
  }
  .notice div{
    margin-top: .1rem;
    color: #232323;
  }
  .notice div span:nth-child(1) {
     font-size: .3rem;
  }
  .notice div span:nth-child(2) {
    font-size: .3rem;
    color: #5a5a5a;
    margin-left: .1rem;
  }
  .look{
    width: 6.4rem;
    /*height: 11.98rem;*/
    padding-top: 0.64rem;
    margin: 0 auto;
  }
  .look-show{
    width: 6.4rem;
    height: 8.88rem;
    margin-top: .2rem;
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
    border-radius: .1rem;
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
    font-size: 0.3rem;
    line-height: 0.24rem;
    font-weight: bold;
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
    color: #777;
    font-size: 0.18rem;
    height: 60%;
  }
</style>
