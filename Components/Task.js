import React from 'react';
import { Text, View, Image } from 'react-native';

const Task = (props) => {
  <View>
    <Text>{props.text}</Text>
    <Image source={props.image} />
  </View>;
};

export default Task;
