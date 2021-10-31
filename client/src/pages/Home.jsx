import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";

import PostCard from "../components/PostCard";

const Home = () => {
  // destructure the data to only get Posts data array object
  // const { loading, data:{getPosts: posts} } = useQuery(FETCH_POSTS_QUERY); getError getPosts undefined?

  const { loading, data} = useQuery(FETCH_POSTS_QUERY);
  const { getPosts: posts } = data || {};

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
};

const FETCH_POSTS_QUERY = gql`
  query getPosts {
    getPosts {
      id
      username
      body
      createdAt
      likeCount
      likes {
        id
        username
      }
      commentCount
      comments {
        id
        username
        body
      }
    }
  }
`;

export default Home;
