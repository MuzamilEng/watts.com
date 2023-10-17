import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAddPostMutation, useDeletePostMutation, useGetPostsByIdQuery, useGetPostsQuery, useUpdatePostMutation } from '../store/storeApi';

const UserContext = createContext();

export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const { data: fetchedPosts } = useGetPostsQuery();


  useEffect(() => {
    setPosts(fetchedPosts);
    console.log(posts, "posts");
  }, [fetchedPosts, posts]);

  return (
    <UserContext.Provider value={{ posts, setPosts }}>
      {children}
    </UserContext.Provider>
  );
};
