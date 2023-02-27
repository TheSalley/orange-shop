// components/search_com/search_com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    address: ""
  },
  lifetimes: {
    attached: async function() {
      const res = await wx.getLocation({
        type: "wgs84"
      })
      await this.getAdress(res.longitude, res.latitude)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getAdress(longitude, latitude) {
      let that = this
      wx.request({
        url: `http://apia.yikeapi.com/geocode/?appid=85841439&appsecret=EKCDLT4I&output=json&location=${longitude},${latitude}`,
        success(res) {
          console.log(res.data.regeocode.addressComponent.city);
          that.setData({
            address: res.data.regeocode.addressComponent.city
          })
        }
      })
    }
  },
})
