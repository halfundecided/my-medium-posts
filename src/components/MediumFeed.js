import React, { useState, useEffect } from 'react';
import { Post } from './';

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
    return <div>loading...</div>;
  }

  return (
    <>
      <Post posts={posts} />
    </>
  );
};

export default MediumFeed;
