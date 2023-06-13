import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, View, Animated} from 'react-native';

export const Accordian = props => {
  const [open, setOpen] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    if (!open) {
      Animated.timing(fadeAnim, {
        toValue: 100,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    setOpen(!open);
  };

  return (
    <View style={[styles.container]}>
      <Pressable style={styles.pressableContainer} onPress={fadeIn}>
        <Text style={styles.textBaseStyles}>{props.title}</Text>
        <Text style={styles.textBaseStyles}>{open ? '^' : '>'}</Text>
      </Pressable>
      {open && (
        <Animated.View style={{height: fadeAnim}}>
          {props.children}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#1A1A2D',
  },
  pressableContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBaseStyles: {
    color: 'white',
  },
});
