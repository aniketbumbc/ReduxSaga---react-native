import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/reducers/rootReducer';
import { fetchPostsRequest } from '../Redux/actions/postsActions/postActions';

const PostList = () => {
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  return (
    <View>
      <Text> Post List </Text>
      <ScrollView>
        {posts?.map((todo, index) => (
          <View key={todo.id} style={{ paddingTop: 20 }}>
            <Text>
              {++index}. {todo.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PostList;
