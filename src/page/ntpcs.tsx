import React from 'react'
import BlockWrapper from "../component/BlockWrapper"
import { Descriptions, Button } from 'antd'
import { useSelector } from 'react-redux'
function Ntpcs() {
  const serverUrl = useSelector(store => {
    const serverAddress = store.config.get("serverAddress")
    const serverPort =  store.config.get("serverPort")
    if(serverAddress && serverPort) {
      return serverAddress + ':' + serverPort
    } else return ''
  })

  const handleClick = () => {
    window.api.ntpcs(serverUrl).then(console.log) 
  }

  return (
    <BlockWrapper
      style={{
        width: "100%",
        height: "100%",
        padding: "30px 100px"
      }}
    >
      <Descriptions
        title="发送帧"
        bordered={true}
        column={3}
        layout="horizontal"
      >
        <Descriptions.Item
          label="发送时刻"
          span={3}
        >
          2020年0月0日0时0分0秒
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="接收帧"
        bordered={true}
        column={3}
        layout="horizontal"
      >
        <Descriptions.Item
          label="接收时刻"
          span={3}
        >
          2020年0月0日0时0分0秒
        </Descriptions.Item>
        <Descriptions.Item
          label="回送时刻"
          span={3}
        >
          2020年0月0日0时0分0秒
        </Descriptions.Item>
      </Descriptions>
      <Button 
        type="primary"
        onClick={handleClick}
        style={{
          marginTop: 50,
          alignSelf: "start"
        }}  
      >发起请求</Button>
    </BlockWrapper>
  )
}

export default Ntpcs