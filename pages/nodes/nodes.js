let util = require("../../utils/util.js");
// pages/nodes/nodes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNodes()
  },
  /**
   * @getNodes 获取节点列表函数
   */
  getNodes: function() {
    util.r("/api/nodes/all.json","GET").then(res => {
      if(res.statusCode === 200) {
        this.setData({
          nodes: res.data
        })
      }
    })
  },
  /**
   * @goTopics 获取主题详情
   */
  goTopics: function(e) {
    wx.navigateTo({
      url: "../topics/topics?id=" + e.currentTarget.dataset.id + "&title=" + e.currentTarget.dataset.title
    })
  },
  /**
   * @refreshTopics 刷新主题
   */
  refreshTopics: function() {
    this.getNodes()
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