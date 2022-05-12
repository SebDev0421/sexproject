import React ,{useState,useEffect}from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import EventEmitter from 'react-native-eventemitter';


import Main from './Views/Main';
import StartBegin from './Views/StartBegin';
import Knowself from './Views/Knowself';
import Porn from './Views/Porn';
import Mitos from './Views/Mitos';
import Eroticism from './Views/Eroticism';
import Practice from './Views/Practice';
import Infections from './Views/Infections';
import Contraceptives from './Views/Contraceptives';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;



const App = () => {

  let [taskService,setTaskService] = useState(<StartBegin/>);
  let [MainService,setMainService] = useState();
  let [screenService,setScreenService] = useState();
  

  useEffect(()=>{
    EventEmitter.on('getting',()=>{
      setMainService(<Main/>);
    })

    EventEmitter.on('closeKnow',()=>{
      setScreenService()
    })

    EventEmitter.on('openKnow',()=>{
      setScreenService(<Knowself/>)
    })

    EventEmitter.on('openPorn',()=>{
      setScreenService(<Porn/>)
    })

    EventEmitter.on('openMitos',()=>{
      setScreenService(<Mitos/>)
    })

    EventEmitter.on('openEroticism',()=>{
      setScreenService(<Eroticism/>)
    })

    EventEmitter.on('openPractice',()=>{
      setScreenService(<Practice/>)
    })

    EventEmitter.on('openInfections',()=>{
      setScreenService(<Infections/>)
    })

    EventEmitter.on('openContraceptives',()=>{
      setScreenService(<Contraceptives/>)
    })

    

  })
  
  return (
    <View 
         style={Styles.container_app}
        >
          {taskService}
          {MainService}
          {screenService}
          
    </View>
      
  );
};

const Styles = StyleSheet.create({
  container_app : {
    width:windowWidth,
    height:windowHeight,
    backgroundColor:'#FFFF'
  }
});

export default App;
