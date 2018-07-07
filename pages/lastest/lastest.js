// pages/lastest/lastest.js
const util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newArticles: [], // 最新文章
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getNewArticle()
  },
  /**
   * @refreshArticle 刷新文章
   */
  refreshArticle: function() {
    this.getNewArticle()
  },
  /**
   * @getNewArticle 获取热门文章
   */
  getNewArticle: function() {
    util.r("/api/topics/latest.json").then(res => {
      if (res.statusCode === 200) {
        this.setData({
          newArticles: res.data
        })
      }
    })
  },
  /**
   * @ goArticleContent 跳转至文章详情页
   */
  goArticleContent: function(e) {
    try {
      let article = e.currentTarget.dataset.content
      wx.setStorageSync("article", article)
    } catch (e) {}
    wx.navigateTo({
      url: "../article/article"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})