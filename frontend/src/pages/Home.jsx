import React, { useState } from 'react'
import { useEffect } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { useQuery, gql, useMutation } from '@apollo/client';

const QUERY_ALL_USERS = gql`
  query GetPosts{
    getPosts {
      id
      title
      description
      image
    }
  }
`;

const DELETE_POST = gql`
  mutation DeletePost (){
    deletePost(id: $id)
  }
`;

const Home = () => {

  const { loading, error, data } = useQuery(QUERY_ALL_USERS);

  const [ deletePost ] = useMutation(DELETE_POST);

  const handleDelete = (id) => {
    deletePost({
      variables: { id: id },
    })
      .then(() => {
        console.log('Post deleted successfully!');
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };

  if (data) {
    console.log(data);
  }

  if (loading) {
    console.log('Data is loading!');
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className='container'>
      <div className='container-inner'>
      <h1 className='header'>Posts</h1>
      <Link to='/addpost'>Add Post</Link>
        <div className='posts-container'>
          {
              data && data.getPosts.map( (post, index) => {
                return (
                  <div className='post' key={index}>
                      <Link to={`/post/${post.id}`}>
                        <div>
                          <h6>{post.id}</h6>
                          <h2>{post.title}</h2>
                          <h3>{post.description}</h3>
                          <img src={post.image} alt="post image" className='img'/>
                        </div>
                      </Link>
                      <Link to='/'>Update</Link>
                      <Link to='/:id' onClick={handleDelete}>Delete</Link>
                  </div>

                  
                )
              })
          }
        </div>
      </div>
    </div>
  )
}

export default Home