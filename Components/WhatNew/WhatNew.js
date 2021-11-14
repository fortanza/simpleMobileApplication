import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const WhatNew = (props) => {
  return (
    <View style={styles.item}>
      <Text>{props.text}</Text>
      <Image
        style={styles.img}
        source={{
          uri: props.image,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
  },

  img: {
    height: 300,
    width: 300,
  },
});

export default WhatNew;
