import React, { useEffect, useState } from 'react';
import { IPost } from './IPost';
import http from '../http';
import Spinner from '../Components/Spinner/Spinner';
import PostCards from './PostCards';
import UsePostSearch from '../Hooks/usePostSearch';
import PostSearch from './postSearch';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [search, setSearch] = useState('');

  const searchedPosts = UsePostSearch(posts, search);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    http.get('posts').then(res => {
      setPosts(res.data);
      // console.log( res.data );
      console.log( posts );
    }).catch(err => console.log(err));

  };

  const deletePost = (id?: number) => {
    const isDelete = confirm('Really delete this post?');
    if (isDelete) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <>

      <div className="container mt-5">
        <h1 className="mb-5">Posts</h1>
        <PostSearch setSearch={setSearch}/>
      </div>
      {
        posts.length
        ?
          <PostCards posts={searchedPosts} deletePost={deletePost} />
          :
          <Spinner/>


      }

    </>

  );
};

export default Posts;