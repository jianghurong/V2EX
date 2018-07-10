let util = require("../../utils/util.js")
// pages/topics/topics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic_id: null,//主题id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
    })
    this.setData({
      topic_id: options.id
    })
    this.getTopicArticle()
  },
  /**
   * @getTopicArticle 获取主题文章
   */
  getTopicArticle: function() {
    util.r("/api/topics/show.json?node_id=" + this.data.topic_id,"GET").then(res => {
      if(res.statusCode === 200) {
        this.setData({
          topicArticles: res.data
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
    } catch (e) { }
  },
  /**
   * @refreshArticle 刷新文章
   */
  refreshArticle: function () {
    this.getTopicArticle()
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