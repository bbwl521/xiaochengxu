// pages/home/home.js
Page({
 
  //  * 页面的初始数据
  data: {
    title:'',
    list:[]
  },
  onLoad:function(){
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10',
      header:{
        "Content-type":JSON
      },
      success:(res)=>{
        console.log(res.data)
        this.setData({
          title:res.data.title,
          list:res.data.subjects
        })
      }
    })
  }





})