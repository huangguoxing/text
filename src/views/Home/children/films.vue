<template>
  <div class="page-home-films">
    <Banner :imgs="bannerListImgs" :navigation="true" />
    <TabControl @tabClick="tabClick"/>
    <NovelList />
    <Loading class="load" v-if="load"/>
  </div>
</template>
<script>
import Banner from '../../../components/Banner'
import TabControl from '../../../components/content/tabControl/TabControl'
import NovelList from '../../../components/content/novelList/novelList'
import { mapActions, mapGetters ,mapState} from 'vuex'
import { Loading } from 'vant';
export default {
  name: 'films',
  components:{
    Banner,
    TabControl,
    NovelList,
    Loading
  },
  methods: {
    ...mapActions('film',['getBannerList']),
    tabClick(index){
      console.log(index,"哈哈哈哈")
    }
  },
  computed: {
    ...mapState({
      load: state => state.loading.isShow
    }),


    ...mapGetters('film',['bannerListImgs'])
  },
  mounted () {
    this.$nextTick(()=>{
      this.getBannerList()
    })
   console.log(this.$store.state.loading.isShow,22222222222)
  }
}
</script>

<style>
 .load{
   color: red;
   font-size: 30px;
   z-index: 2;
   position: absolute;
   top:50%;
   left: 50%;
 }
</style>
