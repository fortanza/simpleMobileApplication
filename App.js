import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import WhatNew from './Components/WhatNew/WhatNew';

export default function App() {
  const [needle, setNeedle] = useState();
  const [img, setImg] = useState(
    'https://coffee.alexflipnote.dev/3IW0FOR3MFE_coffee.jpg'
  );
  const [newsItems, setNewsItems] = useState([]);

  const handleAddNew = () => {
    Keyboard.dismiss();
    handleGenerateImg();
    const whatsNews = { text: needle, image: img };
    setNewsItems([...newsItems, whatsNews]);
    setNeedle(null);
  };

  const handleGenerateImg = () => {
    axios
      .get(`https://coffee.alexflipnote.dev/random.json`)
      .then(({ data }) => {
        setImg(data.file);
      })
      .catch(() => {
        console.error('Plz fix your call, or set up your internet');
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          style={styles.input}
          onChangeText={(needle) => setNeedle(needle)}
          value={needle}
          placeholder={'Quoi de neuf ?'}
          placeholderTextColor='#d2d7d3'
        />

        <TouchableOpacity onPress={() => handleAddNew()}>
          <View style={styles.addLayout}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>Publier</Text>
            </View>
          </View>
        </TouchableOpacity>
        <StatusBar style='auto' />
      </KeyboardAvoidingView>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View>
          {newsItems.map((news, index) => {
            return <WhatNew key={index} text={news.text} image={news.image} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingLeft: '10%',
    paddingRight: '10%',
    fontFamily: 'arial',
  },
  input: {
    backgroundColor: '#f8f8f8',
    color: '#6c7a89',
    fontWeight: '700',
    borderColor: '#ffffff',
    borderRadius: 5,
    height: 60,
    marginTop: 60,
    borderWidth: 1,
    padding: 15,
  },
  addLayout: { flexDirection: 'row', justifyContent: 'flex-end' },
  addWrapper: {
    marginTop: 10,
    width: 110,
    height: 35,
    backgroundColor: '#fff657',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff657',
  },
  addText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});
