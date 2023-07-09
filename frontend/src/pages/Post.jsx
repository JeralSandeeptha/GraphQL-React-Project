import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';


const QUERY_SINGLE_USER = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      description
      image
    }
  }
`;

const Post = () => {

  const id = useParams();

  console.log(id);

  const { loading, error, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { id: id }
  });

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }

  if (loading) {
    console.log('Data is loading!');
  }

  return (
    <div>
      <h1>Post Page</h1>

      <div>
        <h2></h2>
        <h6></h6>
        <img src="" alt="image" />
        <h3></h3>
      </div>
    </div>
  )
}

export default Post