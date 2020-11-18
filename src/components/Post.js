import React, { useState } from 'react';
import { Card, Avatar, Row } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Post = ({ post }) => {
  const { title, pubDate, link, thumbnail } = post;

  return (
    <>
      <Card
        style={{
          width: 800,
          marginTop: 16,
        }}
        cover={<img alt={title} src={thumbnail} height="300" style={{ objectFit: `cover` }} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          // avatar={ <Avatar src={ avatarSrc } /> }
          title={title}
          description={pubDate}
        />
      </Card>
    </>
  );
};

export default Post;
