import React, { useMemo } from 'react';
import { IUser } from '../Components/Users/IUser';
import { IPost } from '../Pages/IPost';

const UsePostSearch = (array: IPost[], search: string) => {
  const searchedPost = useMemo(() => {
    if (search) {
      return array.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
    }
    return array;
  }, [search, array]);
  return searchedPost;
};

export default UsePostSearch;