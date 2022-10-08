import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
import './App.css';

export const List = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()  =>  {
    async function fetchData()  {
      const result = await axios.get('http://localhost:3001/api/v1/posts',)
        console.log(result)
        console.log(result.data)
        setPosts(result.data);
      }
      fetchData();
      }, []);

  return (
    <table className="index">
      <thead>
        <tr>
          <th>id</th>
          <th>タイトル</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) =>
          <PostItem post={post} key={post.id} /> )}
      </tbody>
    </table>
  );
};

const PostItem = (props) => {
  const {id, title} = props.post
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
    </tr>
  )
}
PostItem.propTypes = {
  post: PropTypes.object.isRequired
}
