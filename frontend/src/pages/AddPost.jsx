import React from 'react'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client';

const CREATE_POST = gql`
  mutation CreatePost ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      description
      image
    }
  }
`;

const AddPost = () => {

  const [postDetails, setPostDetails] = useState({
    title: '',
    description: '',
    image: ''
  });

  const [createPost, { loading, error }] = useMutation(CREATE_POST);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    createPost({
      variables: { 
        input: postDetails
      },
    })
      .then((data) => {
        console.log('Post added:', data);
        setPostDetails({
          title: '',
          description: '',
          image: ''
        });
      })
      .catch((error) => {
        console.error('Error adding post:', error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange={handleChange} value={postDetails.title}/>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" onChange={handleChange} value={postDetails.description}/>
        <label htmlFor="image">Image</label>
        <input type="text" name="image" onChange={handleChange} value={postDetails.image}/>
        <button>Add Post</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  )
}

export default AddPost