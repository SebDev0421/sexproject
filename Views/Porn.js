import CheckBox from '@react-native-community/checkbox';
import React ,{useEffect,useState}from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Linking,
    Button
}from'react-native';

import EventEmitter from 'react-native-eventemitter';

const Module1 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >¿Qué es pornografía?</Text>
            <Text
                style={Styles.description}
            >
                La pornografía es mostrar dentro de sus contenidos la obscenidad, bien sea dentro de algún tipo de imagen o película, donde se ve la realización de actos sexuales con el fin de provocar la excitación sexual del receptor y se muestra sin censura
            </Text>
            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule2',true)
                 }}
                >
                    <Image source = {require('../Images/next.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Module2 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >Otra postura</Text>
            <Text
                style={Styles.description}
            >
                Para las feministas anti pornográficas, afirman que es un instrumento de perpetuación y degradación para las mujeres, pues generan malos conceptos sobre sexualidad, como si la mujer estuviera al servicio del hombre y solo él puede obtener placer. 
            </Text>
            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule3',true)
                 }}
                >
                    <Image source = {require('../Images/next.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>

            <View
                style={Styles.leftButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule1',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}




const PopUpResponse = (props)=>{
    return(
        <View
         style = {{
             position:'absolute',
             width:'70%',
             height:300,
             borderWidth:1,
             borderColor:'#FF0000',
             borderRadius:15,
             backgroundColor:'#000',
             alignItems:'center',
             justifyContent:'center'
         }}
        >

            <Text
             style={{color:'#DC0FF9',fontSize:20}}
            >
                {props.message}
            </Text>

        </View>
    )
}

const Module3 = ()=>{

    let [popUp, setPopUp] = useState()

    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >¿Alguna vez has visto pornografía?</Text>

            <View
             style={{flexDirection:'row', alignItems:'center',marginTop:20}}
            >
               <View
                style={{flexDirection:'row', alignItems:'center',marginEnd:20}}
               >
                <Text
                    style={{color:'#FFFF',marginEnd:5}} 
                >Si</Text>
                <TouchableOpacity
                  style = {{borderWidth:1,borderColor:'#FFFF',borderRadius:5,width:20,height:20}}
                  onPress = {()=>{
                      setPopUp(
                          <PopUpResponse
                           message={'Tu creatividad e imaginación pueden aumentar, aprendiendo poses, juegos y retos sexuales.'}
                          />
                      )
                  }}
                />
               </View>

               <View
                style={{flexDirection:'row', alignItems:'center'}}
               >
                    <Text
                      style={{color:'#FFFF',marginEnd:5}}
                    >No</Text>
                    <TouchableOpacity
                        style = {{borderWidth:1,borderColor:'#FFFF',borderRadius:5,width:20,height:20}}
                        onPress = {()=>{
                            setPopUp(
                                <PopUpResponse
                                 message={'Verás un cuerpo idealizado y una escena actuada. Más adelante abordaremos mitos sobre ello.'}
                                />
                            )
                        }}
                    />
               </View>
               
            </View>

            <Text
                style={Styles.description}
            >
                Te recomendamos no hacerlo, si lo haces que sea en compañia de un adulto mayor, ten presente que encontrarás actos sexuales explicitos
            </Text>
            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule4',true)
                 }}
                >
                    <Image source = {require('../Images/next.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>

            <View
                style={Styles.leftButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule2',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
            {popUp}
        </View>
    )
}

const Module4 = ()=>{

    let [popUp, setPopUp] = useState()

    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >¿Alguna vez has visto pornografía?</Text>

            <View
             style={{flexDirection:'row', alignItems:'center',marginTop:20}}
            >
               <View
                style={{flexDirection:'row', alignItems:'center',marginEnd:20}}
               >
                <Text
                    style={{color:'#FFFF',marginEnd:5}} 
                >Si</Text>
                <TouchableOpacity
                  style = {{borderWidth:1,borderColor:'#FFFF',borderRadius:5,width:20,height:20}}
                  onPress = {()=>{
                      setPopUp(
                          <PopUpResponse
                           message={'¿Qué siento?'}
                          />
                      )
                  }}
                />
               </View>

               <View
                style={{flexDirection:'row', alignItems:'center'}}
               >
                    <Text
                      style={{color:'#FFFF',marginEnd:5}}
                    >No</Text>
                    <TouchableOpacity
                        style = {{borderWidth:1,borderColor:'#FFFF',borderRadius:5,width:20,height:20}}
                        onPress = {()=>{
                            setPopUp(
                                <PopUpResponse
                                 message={'¿Cuantas veces lo hago?'}
                                />
                            )
                        }}
                    />
               </View>
               
            </View>

            <Text
                style={Styles.description}
            >
                Queremos que evalúes con qué frecuencia lo haces, que te hace sentir y si sientes que lo necesitas.
            </Text>
            
            <View
                style={Styles.leftButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule3',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
            {popUp}
        </View>
    )
}



const Porn = ()=>{

    let [actualModuleView,setModuleActual] = useState(<Module1/>)

    useEffect(()=>{

        EventEmitter.on('openModule1',()=>{
            setModuleActual(<Module1/>)
        })

        EventEmitter.on('openModule2',()=>{
            setModuleActual(<Module2/>)
        })

        EventEmitter.on('openModule3',()=>{
            setModuleActual(<Module3/>)
        })

        EventEmitter.on('openModule4',()=>{
            setModuleActual(<Module4/>)
        })
    })
    

    return(
        <View style={Styles.container}>
            <View
             style={Styles.back}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('closeKnow',true)
                 }}
                >
                    <Image source={require('../Images/back.png')} style={Styles.imgBack}/>
                </TouchableOpacity>
            </View>
            
            {actualModuleView}
            
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'#000'
    },
    nextButtom:{
        width:60,
        height:60
    },
    leftButtom:{
        width:60,
        height:60
    },
    title:{
        color:'#4BF90F',
        fontSize:25,
        marginTop:40
    },
    description:{
        color:'#DC0FF9',
        fontSize:20,
        marginTop:40
    },
    link:{
        color:'#0F8EF9',
        fontSize:20,
        marginTop:40
    },
    containerModule:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    back:{
        position:'absolute',
        top:10,
        left:10
    },
    imgBack:{
        width:60,
        height:60
    }
})


export default Porn;
