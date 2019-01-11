// pages/list/list.js
//获取数据！
let datas = require('../../datas/list-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //给获取的数据定义一个空数组！
    dataArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //把获取到的数组放到定义的空数组里
    this.setData({
      datasArr:datas.list_data
    })
  },
  //跳转
  toDateil(event) {
    console.log(event)
    //把拿到的数据传过去detail
    let index =event.currentTarget.dataset.id;  
    console.log(index)
    let url = '/pages/detail/detail?id =' + index; 
    console.log(url)
    wx.navigateTo({
      url
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})