import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
   diffClamp,
   interpolate,
   Extrapolate,
} from 'react-native-reanimated';
import {
   usePanGestureHandler,
   withOffset,
   withDecay,
   translateZ,
} from 'react-native-redash';

import Card, { Cards, CARD_HEIGHT } from './components/Card';
// import TodoContainer from './components/TodoContainer';

const MARGIN = 16;
const { height } = Dimensions.get('window');
const HEIGHT = CARD_HEIGHT + MARGIN * 2;

const cards = [
   { type: Cards.Card1 },
   { type: Cards.Card2 },
   { type: Cards.Card3 },
   { type: Cards.Card4 },
   { type: Cards.Card5 },
   { type: Cards.Card6 },
];

export default function App() {
   const [containerHeight, setContainerHeight] = useState(height);
   const {
      gestureHandler,
      state,
      translation,
      velocity,
   } = usePanGestureHandler();

   const visibleCards = Math.floor(containerHeight / HEIGHT);

   console.log({ visibleCards, containerHeight });

   // const translateY = withOffset(translation.y, state);
   const y = diffClamp(
      withDecay({
         value: translation.y,
         velocity: velocity.y,
         state,
      }),
      -HEIGHT * cards.length + visibleCards * HEIGHT * 0.2,
      // -HEIGHT * cards.length + visibleCards * HEIGHT,
      0
   );

   return (
      <PanGestureHandler {...gestureHandler}>
         <Animated.View
            style={styles.container}
            onLayout={({
               nativeEvent: {
                  layout: { height: h },
               },
            }) => {
               console.log('layout', { h });
               return setContainerHeight(h);
            }}
         >
            {cards.map(({ type }, index) => {
               const translateY = interpolate(y, {
                  inputRange: [-HEIGHT * index, 0],
                  outputRange: [(-HEIGHT + 48) * index, 0],
                  // outputRange: [-HEIGHT * index, 0],
                  extrapolate: Extrapolate.CLAMP,
               });

               return (
                  <Animated.View
                     key={index}
                     style={[styles.card, { transform: [{ translateY }] }]}
                  >
                     <Card {...{ type }} />
                  </Animated.View>
               );
            })}
         </Animated.View>
      </PanGestureHandler>
   );
}

const styles = StyleSheet.create({
   container: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      marginTop: MARGIN,
   },
   card: {
      marginVertical: MARGIN,
   },
});
