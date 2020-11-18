import React from 'react';
import { Post } from './';
import { Row } from 'antd';

const Posts = ({ posts }) => {
  return (
    <section>
      {posts.map((post) => {
        return (
          <Row key={post.link} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Post key={post.link} post={post} />
          </Row>
        );
      })}
    </section>
  );
};

export default Posts;
