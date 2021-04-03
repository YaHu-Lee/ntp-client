const dgram = require("dgram")
const udpServer = dgram.createSocket("udp4")  // 接收广播
const listenerArray = []

udpServer.on("message", (msg) => {
  console.log(`收到报文,其长度为${msg.length}\n`)
  let result = []
  for(let i = 0; i < msg.length; i++) {
    result.push(msg[i])
  }
  for(let k = 0; k < result.length; k++) {
    if(k % 4 === 0) {
      console.log(Buffer.from(result.slice(k, k + 4)))
    }
  }
  let seconds = (((result[40] * 256) + result[41]) * 256 + result[42]) * 256 + result[43]
  let d = new Date()
  d.setTime(0)
  d.setUTCSeconds(seconds + 8*60*60)
  d.setUTCFullYear(d.getUTCFullYear() - 70)
  listenerArray.map(listener => listener(d))
})
function begin() {
  udpServer.bind(123)
}
function end() {
  udpServer.close()
}
module.exports = {
  subscribe: function(listener) {
    listenerArray.push(listener)
  },
  desubscribe: function(listener) {
    listenerArray.splice(listenerArray.indexOf(listener), 1)
  },
  begin,
  end
}
