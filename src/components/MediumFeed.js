import React, { useState, useEffect } from 'react';
import { Post } from './';
import { Skeleton, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const MY_MEDIUM_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@halfundecided';

const MediumFeed = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState(null);

  const fetchMediumData = async () => {
    setLoading(true);
    try {
      const res = await fetch(MY_MEDIUM_URL);
      const fetchedData = await res.json();
      setLoading(false);
      setProfile(fetchedData.feed);
      setPosts(fetchedData.items);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMediumData();
  }, []);

  if (loading) {
    return (
      <>
        {[...Array(4)].map((e, index) => {
          return (
            <Card
              key={index}
              style={{ width: 500, marginTop: 16 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Skeleton loading={loading} avatar active>
                <Meta avatar={<Avatar src="" />} title="" description="" />
              </Skeleton>
            </Card>
          );
        })}
      </>
    );
  }

  return (
    <>
      <Post posts={posts} />
    </>
  );
};

export default MediumFeed;
