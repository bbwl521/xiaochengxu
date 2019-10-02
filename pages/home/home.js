Page({
 
  // 页面的初始数据
  data: {
      name:"wyoq",
      age:18,
      students:[
        {id:110,name:"kobe",age:30},
        { id: 111, name: "james", age: 28 },
        { id: 112, name: "curry", age: 32 },
        { id: 113, name: "whv", age: 18 }
      ],
      count:0
  },
  jia(){
   this.setData({
      count:this.data.count+=1
   })
  }
})