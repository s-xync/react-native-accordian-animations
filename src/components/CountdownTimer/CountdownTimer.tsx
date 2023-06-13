import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const TOTAL_TIME = 25 * 60 * 1000;
export const CountdownTimer = () => {
  const [startTime, setStartTime] = useState<number>();
  const [remainingTime, setRemainingTime] = useState<number>(TOTAL_TIME);
  const [timerFlag, setTimerFlag] = useState(false);
  const [intervalRef, setIntervalRef] = useState<number>();

  useEffect(() => {
    return () => {
      if (timerFlag && intervalRef) {
        clearInterval(intervalRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!timerFlag) {
      if (intervalRef) {
        clearInterval(intervalRef);
      }
      return;
    }

    const ref = setInterval(() => {
      const elapsedTime = new Date().getMilliseconds() - startTime;
      setRemainingTime(TOTAL_TIME - elapsedTime);
    }, 100);

    setIntervalRef(ref);
  }, [timerFlag]);

  const startTimer = useCallback(() => {
    setStartTime(new Date().getMilliseconds());
    setTimerFlag(true);
  }, []);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timer}>{remainingTime}</Text>
      <Pressable onPress={startTimer}>
        <Text>Start Timer</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    marginTop: 40,
  },
  timer: {
    fontSize: 30,
    textAlign: 'center',
  },
});
