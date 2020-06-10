<template>
  <div>
     <ul class="mz-tabbar">
       <li v-for="tab in tabs" :key="tab.id"> 
          <router-link :to="tab.href">
            <i class="iconfont" :class="[tab.icon]"></i>
            <span>{{tab.name}}</span>
          </router-link>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    tabs:Array
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/common/mixin.scss';
.mz-tabbar{
  @include border-top;
  position:fixed;
  left:0;
  bottom:0;
  width:100%;
  height: 49px;
  background: yellowgreen;
  display: flex;
  align-items: center;
  text-align: center;
  li{
    flex:1;
  }
}
</style>
