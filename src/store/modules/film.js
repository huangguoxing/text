//需要调用ajax,那么引入封装好的 网络请求工具模块
import request from '../../utils/request'

export default{
  namespaced: true,
  state: {
    bannerList:[]//热门影片轮播图数据
  },
  getters: {
    bannerListImgs(state){
      return state.bannerList.map(item => item.img)
    }
  },
  mutations: {
    setBannerList(state,payload){
      state.bannerList = payload;
    }
  },
  actions: {
    // 获取轮播图数据
    getBannerList(context){
      request.get('http://localhost:3000/banner').then(data =>{
        console.log(data);
        context.commit('setBannerList',data)
      })
    }
  }
}