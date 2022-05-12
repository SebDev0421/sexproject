import CheckBox from '@react-native-community/checkbox';
import React ,{useEffect,useState}from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Linking,
    Button,
    ScrollView
}from'react-native';

import EventEmitter from 'react-native-eventemitter';

const Module1 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >¿Y qué pasa si no me cuido sexualmente?</Text>

            <View>
                <TouchableOpacity
                    onPress={()=>{
                        EventEmitter.emit('openModule2',true)
                    }}
                >
                    <Image source={require('../Images/infectionsTitle.png')}/>
                </TouchableOpacity>
            </View>
            <Text
                style={Styles.description}
            >
                Infecciones de transmisión sexual
            </Text>
            
        </View>
    )
}

const Module2 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
             <Text
             style={[Styles.title,{marginTop:80}]}
            >
               ¿Cuáles son?
            </Text>
            <ScrollView
             style={{width:'100%'}}
            >
                <View
                 style={{width:'100%',alignItems:'center'}}
                >
                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'space-between',marginTop:50}}
                    >
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                             
                            >
                                <Image source={require('../Images/hpv.png')}  style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                            >
                                <Image source={require('../Images/vih.png')} style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'space-between',marginTop:50}}
                    >
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                            >
                                <Image source={require('../Images/clamidad.png')}  style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                            >
                                <Image source={require('../Images/hepatitis.png')} style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'space-between',marginTop:50}}
                    >
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                             
                            >
                                <Image source={require('../Images/sifilis.png')}  style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                            >
                                <Image source={require('../Images/tricomona.png')} style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'space-between',marginTop:50}}
                    >
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                            >
                                <Image source={require('../Images/gonorrea.png')}  style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View
                 style={{width:'100%',justifyContent:'space-between',flexDirection:'row',marginBottom:150}}
                >
                    <View
                        style={{width:60,height:60}}
                    >
                        <TouchableOpacity
                            onPress={()=>{
                            EventEmitter.emit('openModule1',true)
                            }}
                        >
                            <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                    </View>

                    <View
                     style={{width:60,height:60}}
                    >
                    <TouchableOpacity
                    onPress={()=>{
                        EventEmitter.emit('openModule3',true)
                    }}
                    >
                        <Image source = {require('../Images/next.png')} style={{width:50,height:50}}/>
                    </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    )
}

const Module3 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
             <Text
             style={[Styles.title,{marginTop:80}]}
            >
               Se trasmiten por medio de
            </Text>
            <ScrollView
             style={{width:'100%'}}
            >
                <View
                 style={{width:'100%',alignItems:'center'}}
                >
                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'center',marginTop:50}}
                    >
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:300,height:300}}>
                            <TouchableOpacity
                             
                            >
                                <Image source={require('../Images/sangre.png')}  style={{width:250,height:250}}/>
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'center',marginTop:50}}
                    >
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:300,height:300}}>
                            <TouchableOpacity
                             
                            >
                                <Image source={require('../Images/embarazo.png')}  style={{width:250,height:250}}/>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'center',marginTop:50}}
                    >
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:300,height:300}}>
                            <TouchableOpacity
                             
                            >
                                <Image source={require('../Images/contacto.png')}  style={{width:250,height:250}}/>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                <View
                 style={{width:'100%',justifyContent:'space-between',flexDirection:'row',marginBottom:150}}
                >
                    <View
                        style={{width:60,height:60}}
                    >
                        <TouchableOpacity
                            onPress={()=>{
                            EventEmitter.emit('openModule2',true)
                            }}
                        >
                            <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                    </View>

                    <View
                     style={{width:60,height:60}}
                    >
                    <TouchableOpacity
                    onPress={()=>{
                        EventEmitter.emit('openModule4',true)
                    }}
                    >
                        <Image source = {require('../Images/next.png')} style={{width:50,height:50}}/>
                    </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            
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


const Desplegable =()=>{

    return(
        <View>
            <Text
                style={Styles.title}
            >¿De inmediato puedo identificar una ITS?</Text>
            <Text
                style={Styles.description}
            >
                La ITS es una enfermedad que puede manifestar síntomas después de unos días, meses o hasta años, e infectar a las demás parejas sexuales desde que se adquiere.
            </Text>


        </View>
    )
}


const Module4 = ()=>{

    let [desplegable, setDesplegable] = useState()

    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
                onPress={()=>{
                    setDesplegable(<Desplegable/>)
                }}
            >Preguntas frecuentes</Text>
            {desplegable}
            <View
                 style={{width:'100%',justifyContent:'space-between',flexDirection:'row',marginBottom:150}}
                >
                    <View
                        style={{width:60,height:60}}
                    >
                        <TouchableOpacity
                            onPress={()=>{
                            EventEmitter.emit('openModule3',true)
                            }}
                        >
                            <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                    </View>

                    <View
                     style={{width:60,height:60}}
                    >
                    <TouchableOpacity
                    onPress={()=>{
                        EventEmitter.emit('openModule5',true)
                    }}
                    >
                        <Image source = {require('../Images/next.png')} style={{width:50,height:50}}/>
                    </TouchableOpacity>
                    </View>
                </View>
            
        </View>
    )
}

const Module5 = ()=>{


    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >¿Cuáles son algunos de  los síntomas de una ITS ?</Text>
            <Text
                style={Styles.description}
            >
                Aparición de:
                Úlceras, llagas, verrugas, vesículas con dolor o no, secreción anormal con color o olor, dolor al orinar, dolor durante la penetración, picazón, ardor.
            </Text>
            <Image source={require('../Images/ets.png')} style={{width:274,height:100}}/>
            <View
                 style={{width:'100%',justifyContent:'space-between',flexDirection:'row',marginBottom:150}}
                >
                    <View
                        style={{width:60,height:60}}
                    >
                        <TouchableOpacity
                            onPress={()=>{
                            EventEmitter.emit('openModule4',true)
                            }}
                        >
                            <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                    </View>

                    
                </View>
            
        </View>
    )
}


const Infections = ()=>{

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
        
        EventEmitter.on('openModule5',()=>{
            setModuleActual(<Module5/>)
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
        height:60,
        position:'absolute',
        bottom:0,
        right:0
    },
    leftButtom:{
        width:60,
        height:60,
        position:'absolute',
        bottom:0,
        left:0
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


export default Infections;
