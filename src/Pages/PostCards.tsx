import React from 'react';
import { IUser } from '../Components/Users/IUser';
import { IPost } from './IPost';

const PostCards = ({
   posts,
   deletePost
  }: {
  posts: IPost[],
  deletePost: (id?: number) => void
}) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {posts.length && posts.map(post =>
        <div className="col" key={post.id}>
          <div className="card h-100">
            <div className="card-body">
              {/*<h5 className="card-title">*/}
              {/*  <Link to={`users/${user.id?.toString()}`}>*/}
              {/*    {user.name}*/}
              {/*  </Link>*/}
              {/*</h5>*/}
              <p className="card-text"><b>Post id:</b> {post.id}</p>
              <p className="card-text"><b>UserId:</b> {post.userId}</p>
              <p className="card-text"><b>Post Title:</b> {post.title}</p>
              <p className="card-text"><b>Post Body:</b> {post.body}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <button
                  className="btn btn-danger"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCards;