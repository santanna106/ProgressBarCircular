import React,{useState,useEffect,useRef} from 'react'
import { View,Text } from 'react-native'
import AnimatedSpring from './src/components/AnimatedSpring'
import {Timer} from  'react-native-animated-timer';

export default function App() {


const [counter, setCounter] = useState(0);
const r = useRef(null);
r.current = { counter, setCounter };
useEffect(
  () => {
    const id = setInterval(() => {
      if(r.current.counter >= 10){
        clearInterval(id);
      } else {
        r.current.setCounter(r.current.counter + 1);

      }
  
      console.log(r.current.counter/10);
     
    }, 1000);
    return () => {
      clearInterval(id);
    };
  },
  [] // empty dependency array
);

 return (
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <AnimatedSpring value={counter/10} />

   
   </View>
  );
}