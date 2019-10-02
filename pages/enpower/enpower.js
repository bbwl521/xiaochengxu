// pages/enpower/enpower.js
Page({

  info(event) {
    console.log(event)
  },
  onLoad:function(){
    wx.request({
      // https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10
      url: "123.207.32.32:8000/api/v1/home/data?tytpe=sell&page=1",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res);
      },
    });  
  }
})