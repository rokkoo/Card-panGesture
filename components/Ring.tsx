import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { Dimensions } from 'react-native';
import Animated, {
   interpolate,
   Value,
   multiply,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const AnimanteCircle = Animated.createAnimatedComponent(Circle);
const size = width - 32;
const strokeWidth = 10;
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;

interface CircularProgressProps {
   progress: Animated.Value<number>;
}

const TAU = 2 * Math.PI;
const theta = 2.3 * TAU;

const Ring = ({ progress }: CircularProgressProps) => {
   const progressValue = new Value(0);

   const alpha = interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, Math.PI * 2],
   });

   const strokeDashoffset = multiply(progress, circumference);

   return (
      <Svg width={size} height={size}>
         <Circle
            stroke="#636e72"
            fill="none"
            strokeWidth={strokeWidth}
            cx={size / 2}
            cy={size / 2}
            r={radius / 2}
         />
         <AnimanteCircle
            stroke="#0984e3"
            strokeWidth={strokeWidth}
            strokeDashoffset={strokeDashoffset}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius / 2}
            strokeDasharray={`${circumference} ${circumference}`}
         />
      </Svg>
   );
};

export default Ring;
