//app.js
App({
  // 小程序初始化完成时，会被执行里面的函数
  onLaunch:function(){
    // 获取用户信息函数---异步调用
    wx.getUserInfo({
        success:function(res){
            console.log(res)
        }
    })
  },
  // 小程序界面显示出来之后会被执行里面的函数
  onShow:function(option){
    // 判断小程序打开的场景
      console.log("界面加载出来时执行",option.scene)

    //获取用户信息发送给服务器保存

    
  },
  // 小程序隐藏时
  onHide:function(){
    console.log("当界面受到隐藏事件时会被执行")
  },
  // 小程序受到错误时
  onError:function(msg){
    console.log("小程序中发生一些错误会被执行",msg)
  }

})