// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: null,
    otherList: [],
    commentData:null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getVideo(videoId);
    this.getOtherList(videoId);
    this.getComment(videoId);
  },
  getVideo(id) {
    let that = this;
    wx.request({
      url: "https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id=" + id,
      success(res) {
        if (res.data.code === 0) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })
  },
  getOtherList(id) {
    let that = this;
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=" + id,
      success(res) {
        if (res.data.code === 0) {
          that.setData({
            otherList: res.data.data.othersList
          })
        }
      }
    })
  },
  getComment(id) {
    let that=this;
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=" + id,
      success(res) {
        if (res.data.code===0) {       
          that.setData({
            commentData:res.data.data.commentData
          })
        }
      }
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