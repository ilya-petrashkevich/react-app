import React, { Dispatch, SetStateAction } from 'react';
import { IPost } from './IPost';

const PostSearch = ({setSearch}:{setSearch: Dispatch<SetStateAction<string>>}) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">Search</span>
      <input type="text"
             className="form-control"
             placeholder="Title"
             onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default PostSearch;