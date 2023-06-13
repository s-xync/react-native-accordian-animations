import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Accordian} from '../components/Accordian/Accordian';

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <Accordian title="Quick Actions">
        <Text style={{color: 'white'}}>Component 1</Text>
        <Text style={{color: 'white'}}>Component 1</Text>
        <Text style={{color: 'white'}}>Component 1</Text>
        <Text style={{color: 'white'}}>Component 1</Text>
        <Text style={{color: 'white'}}>Component 1</Text>
        <Text style={{color: 'white'}}>Component 1</Text>
      </Accordian>
      <Accordian title="Transactions">
        <Text style={{color: 'white'}}>Component 2</Text>
        <Text style={{color: 'white'}}>Component 2</Text>
        <Text style={{color: 'white'}}>Component 2</Text>
        <Text style={{color: 'white'}}>Component 2</Text>
        <Text style={{color: 'white'}}>Component 2</Text>
        <Text style={{color: 'white'}}>Component 2</Text>
      </Accordian>
      <Accordian title="Help Section">
        <Text style={{color: 'white'}}>Component 3</Text>
        <Text style={{color: 'white'}}>Component 3</Text>
        <Text style={{color: 'white'}}>Component 3</Text>
        <Text style={{color: 'white'}}>Component 3</Text>
        <Text style={{color: 'white'}}>Component 3</Text>
        <Text style={{color: 'white'}}>Component 3</Text>
      </Accordian>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
});
