import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
   clockRunning,
   Clock,
   Easing,
   Value,
   useCode,
   set,
} from 'react-native-reanimated';

import Ring from './components/Ring';
import { timing, useTimingTransition, useClock } from 'react-native-redash';

export default function App() {
   const progress = new Value(0);
   useCode(() => set(progress, timing({ duration: 5000 })), [progress]);

   return (
      <View style={style.container}>
         <Ring progress={progress} />
      </View>
   );
}

const style = StyleSheet.create({
   container: {
      backgroundColor: '#2d3436',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
});
