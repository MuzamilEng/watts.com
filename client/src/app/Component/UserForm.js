import React, { useState, useEffect } from 'react';
import { useAddUserMutation } from '../store/storeApi';

const UserForm = () => {
    const [addUser] = useAddUserMutation();
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  const [userpost, setUserPost] = useState({ title: '', image: '', description: '' });
  const [imageURL, setImageURL] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageURL(imageURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    // Append the fields to the FormData object
    formData.append('title', userpost.title);
    formData.append('description', userpost.description);
    formData.append('image', userpost.image);
  
    try {
      const response = await addUser(formData); // Assuming addUser expects FormData
  
      // Handle the response if needed
      console.log('Response:', response);
  
      // Optionally, reset the form or do any other action on success
    } catch (error) {
      // Handle the error if needed
      console.error('Error:', error);
    }
  };
  
  

  // Log userpost whenever it changes
  useEffect(() => {
    console.log('userpost:', userpost);
  }, [userpost]);

  return (
    <div className="p-3 bg-[#081229] w-screen">
      <h1 className="text-4xl text-white font-semibold underline text-center">BlogPost</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex justify-center items-center flex-col">
        <label className="text-white text-xl mt-4" htmlFor="title">
          Enter Title
        </label>
        <input
          type="text"
          name="title"
          className="w-1/2 p-2 m-4 focus:outline-none focus:shadow-md border-gray-300 border-1 rounded-md"
          value={userpost.title}
          onChange={(e) => setUserPost({ ...userpost, title: e.target.value })}
        />
        <label className="text-white text-xl mt-4" htmlFor="description">
          Enter Description
        </label>
        <textarea
          name="description"
          cols="30"
          rows="5"
          className="w-1/2 p-2 m-4 focus:outline-none focus:shadow-md border-gray-300 border-1 rounded-md"
          value={userpost.description}
          onChange={(e) => setUserPost({ ...userpost, description: e.target.value })}
        />
        <div className="flex-col flex justify-center items-center">
          <input
            type="file"
            name="image"
            className="text-white mt-[2rem]"
            onChange={handleImageChange}
            accept="image/*"
          />
          <div className="w-full max-[30rem] flex justify-center items-center h-[20rem] mt-[4rem]">
            {imageURL && (
              <img
                src={imageURL}
                alt="Selected Image"
                className="max-w-full max-h-full m-2"
              />
            )}
          </div>
          <button
            type='submit'
            className="btn-primary border-2 mt-3 m-2 border-[#bf1650] text-white w-[12rem] font-bold text-lg p-2 rounded-md text-center hover:bg-[#bf1650]"
          >
            <span className="w-full max-w-[15rem]">Add</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
