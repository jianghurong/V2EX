// pages/article/article.js
const util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: [],// 文章详情
    articleDate: "",// 文章发表时间
    replies: [],// 回复详情
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try { 
      let article = wx.getStorageSync("article")
      wx.setNavigationBarTitle({
        title: article.title
      })
      //把数据中带有img标签的转换成html格式,设置图片样式
      article.content_rendered = article.content_rendered.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ') //防止富文本图片过大  
      this.getReplies(article.id)
      this.setData({
        article: article,
        articleDate: this.toDate(article.created)
      })
    } catch (e) {}
  },
  /**
   * @getReplies 获取用户回复
   */
  getReplies: function(e) {
    util.r("/api/replies/show.json?topic_id=" + e,'GET').then(res => {
      if(res.statusCode === 200) {
        for(let i = 0; i < res.data.length; i++) { // 需优化算法
          res.data[i].content_rendered = res.data[i].content_rendered.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ') //防止富文本图片过大  
        }
        this.setData({
          replies: res.data
        })
      }
    })
  },
  /**
   * @toDate 格式化时间函数
   */
  toDate: function(e) {
    let date = new Date(e * 1000) // 时间戳为10位需要乘1000，13位不需要
    // let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    let hour = date.getHours()
    let min = date.getMinutes()
    return month + "-" + day + " " + hour + ":" + min
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