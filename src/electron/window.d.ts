// 由于在electron中使用了contextBridge来给window对象注入方法
declare interface Window {
  api: {
    send: (channel: ChannelString, data: any) => void,
    receive: (channel: ChannelString, callback: (event: any, data: SendData) => void) => void,
    invoke: (channel: ChannelString, data: any) => PromiseLike
  }
}
type ChannelString = "toMainProcess" | "toRendererProcess" | "invoke" | "call"
type SendData = {
  data: string
}