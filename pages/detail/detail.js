// pages/detail/detail.js
let datas = require('../../datas/list-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    //用来标识是否收藏
    isCollected:false
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let index = options.id;
    console.log(index)
    let detailObj = datas.list_data[index]
    //更新数据
    this.setData({
      index,
      detailObj
    })
    //读取本地缓存数据
    wx.getStorage({
      key: 'isCollected',
      success(event) {
        let isCollected = event.data[index] ? event.data[index] : false;
        //更新data中iscollected的状态值
        this.setData({
          isCollected
        })
      }
    })
  },
  handleCollection(){
    //处理收藏  修改isCollected状态值
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected
    });
    //设置收藏提示框
    let title = isCollected? '收藏成功':'取消收藏'
    wx.showToast({
      title,
      icon:'success'
    });
    //缓存当前的状态值到本地
    let obj = wx.getStorageSync('isCollected'); 
    if(!obj){
      obj:{}
    }
    let index =this.data.index;
    obj[index] = isCollected
    wx.setStorageSync('isCollected',obj)
  },
  handleShare(){
    wx.showActionSheet({
      itemList:['分享到微信朋友圈','分享给微信好友','分享到QQ']
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