import { Card, Space, Switch } from 'antd';
import React, { useState } from 'react';

export function Hello() {
  const [showBorder, setShowBorder] = useState(true);
  const [showShadow, setShowShadow] = useState(true);
  const [showTitleBorder, setShowTitleBorder] = useState(true);
  const [hoverable, setHoverable] = useState(false);

  // 如果开启了 hoverable，返回 undefined 让 Ant Design 的 hover 效果生效
  // 否则根据 showShadow 来决定是否显示静态阴影
  const getBoxShadow = () => {
    if (hoverable) return undefined;
    return showShadow ? '0 6px 16px rgba(0,0,0,0.15)' : 'none';
  };

  return (
    <Space direction="vertical" size="large">
      <Space direction="vertical">
        <Space>
          Border: <Switch checked={showBorder} onChange={setShowBorder} />
        </Space>
        <Space>
          Static Shadow: <Switch
            checked={showShadow}
            onChange={setShowShadow}
            disabled={hoverable}
          />
        </Space>
        <Space>
          Title Border: <Switch checked={showTitleBorder} onChange={setShowTitleBorder} />
        </Space>
        <Space>
          Hover Shadow: <Switch
            checked={hoverable}
            onChange={(checked) => {
              setHoverable(checked);
              if (checked) {
                setShowShadow(false);
              }
            }}
          />
        </Space>
      </Space>
      <div style={{ padding: '20px' }}>
        <Card
          title="Sample Card"
          bordered={showBorder}
          hoverable={hoverable}
          headStyle={{
            borderBottom: showTitleBorder ? '1px solid #f0f0f0' : 'none'
          }}
          style={{
            width: 300,
            boxShadow: getBoxShadow(),
            backgroundColor: '#fff'
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </Space>
  )
}
