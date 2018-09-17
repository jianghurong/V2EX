// pages/home/home.js
const util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotArticles: [],// 热门文章
    hiddenShade: true,// 隐藏遮罩层
    words: "こんにちは！",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotArticle();
  },
  /**
   * @getHotArticle 获取热门文章
   */
  getHotArticle: function () {
    util.r("/api/topics/hot.json").then(res => {
      if (res.statusCode === 200) {
        this.setData({
          hotArticles: res.data
        })
      }
    })
  },
  /**
   * @goArticleContent 跳转至文章详情页 
   */
  goArticleContent: function (e) {
    try {
      wx.setStorageSync("article", e.currentTarget.dataset.content)
      wx.navigateTo({
        url: "../article/article"
      })
    } catch(e) {}
  },
  /**
   * @refreshArticle 刷新文章
   */
  refreshArticle: function () {
    this.getHotArticle()
  },
  /**
   * @hiddenShade 隐藏遮罩层
   */
  hiddenShade: function () {
    this.setData({
      hiddenShade: true
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