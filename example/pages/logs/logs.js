//logs.js
const util = require('./util.js');

import protobuf from 'protobufjs';
import jsonDescriptor from './awesome';
var root = protobuf.Root.fromJSON(jsonDescriptor);
const msg = root.lookupType("AwesomeMessage");

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
