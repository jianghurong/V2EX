const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 封装request请求
function request(url,method) {
  wx.showLoading({
    title: '加载中',
  })
  wx.showNavigationBarLoading()
  let promise = new Promise(function(resolve,reject) {
    wx.request({
      url: getApp().globalData.baseUrl + url,
      method: method,
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        resolve(res)
        wx.hideLoading()
        wx.hideNavigationBarLoading()
      },
      fail: function (res) {
      }
    })
  })
  return promise
}

module.exports = {
  formatTime: formatTime,
  r: request
}
