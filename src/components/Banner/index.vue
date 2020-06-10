<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(img,index) in imgs" :key="index">
          <img :src="img" alt="">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" v-if="pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <template v-if="navigation">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>
</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css'
export default {
  name: 'Banner',
  props:{
    imgs:Array,
    pagination:{ //分页器
      type: Boolean,
      default:true
    },
    navigation: Boolean //前进后退按钮
    
  },
  methods: {
        initSwiper(){
          new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          
          // 如果需要分页器
          pagination:this.pagination? {
            el: '.swiper-pagination',
          }:{},
          
          // 如果需要前进后退按钮
          navigation:this.navigation? {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }:{},
          autoplay:true,
          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
      })        
    }
  },
  updated () {
    this.initSwiper()
  }
}
</script>

<style lang="scss" scoped>
  .swiper-container{
    height: 210px;
    img{
      height: 100%;
      width: 100%;
    }
  }
</style>
