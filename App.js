import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState('Quoi de neuf?');
  const HandlerChangeValue = (e) => {
    onChangeText(e.target.value);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={HandlerChangeValue}
        value={text}
        placeholder='Quoi de neuf ?'
        placeholderTextColor='#d2d7d3'
      />
      <TouchableOpacity>
        <View style={styles.addLayout}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Publier</Text>
          </View>
        </View>
      </TouchableOpacity>
      <StatusBar style='auto' />
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
