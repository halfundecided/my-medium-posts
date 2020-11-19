import React, { useState } from 'react';
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Post = ({ post }) => {
  const { title, pubDate, link, thumbnail } = post;

  return (
    <Card
      style={{
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
      }}
      cover={<img alt={title} src={thumbnail} height="200" style={{ objectFit: `cover` }} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta title={title} description={pubDate} />
    </Card>
  );
};

export default Post;
