<template>
  <div class="tab-control">
    <div class="tab-control-item"
    v-for="(item,index) in titles" :key="item"
    @click="itemClick(index)"
    :class="{active: currentIndex === index}"
    >
     <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  data () {
    return {
      currentIndex: 0
    }
  },
  props:{
    titles:{
      type: Array,
      default(){
        return ['男生','女生']
      }
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
      console.log(index)
    }
  }
}
</script>

<style lang="scss">
  .tab-control{
    display: flex;
    text-align: center;
    height: 50px;
    line-height: 50px;
    .tab-control-item{
      flex: 1;
      span{
        padding: 8px;
      }
    }
  }
  .active{
     border-bottom: 1px solid deeppink;
     color:deeppink;
  }
</style>  
