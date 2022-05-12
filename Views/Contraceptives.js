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
            >¿Cómo prevenirlo?</Text>

            <View>
                <TouchableOpacity
                    onPress={()=>{
                        EventEmitter.emit('openModule2',true)
                    }}
                >
                    <Image source={require('../Images/anticonceptivo.png')}/>
                </TouchableOpacity>
            </View>
            <Text
                style={Styles.description}
            >
                Cuando hablamos de prevención es indispensable tener en cuenta que el único medio para ella es el uso consistente del preservativo durante la relación sexual.
            </Text>
            <Text
                style={Styles.description}
            >
                Además, hay que estar al tanto de la prevención en caso de descuido y un encuentro sexual no seguro
            </Text>

            <Text
                style={Styles.description}
            >
                Recuerda asistir a controles ginecológicos o urológicos mínimo una vez por año
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
                style={Styles.title}
            >¿Sabías que hay formas de  prevenir más divertidas de lo que suena?
            </Text>

            <Text
                style={Styles.description}
            >
                La  sociedad nos ha hecho creer que el prevenir debe ser aburrido, sin embargo esto no debe ser así. La industria se ha interesado en que las personas se cuiden, por lo que han innovado en productos que aparte de cuidarnos nos pueden ayudar a pasar un rato muy placentero 
            </Text>

            <Text
                style={Styles.description}
            >
                Aquí te contamos cuáles son: 
            </Text>
            

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
               Existen condones de sabores 
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
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            
                                <Image source={require('../Images/condon1.png')}  style={{width:350,height:250}}/>
                            
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


const Module4 = ()=>{

    
    return(
        <View
          style={Styles.containerModule}
        >
             <Text
             style={[Styles.title,{marginTop:80}]}
            >
               Existen condones con texturas 
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
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            
                                <Image source={require('../Images/condon2.png')}  style={{width:350,height:250}}/>
                            
                        </View>
                        
                    </View>
                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'center',marginTop:50}}
                    >
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            
                                <Image source={require('../Images/condon3.png')}  style={{width:350,height:250}}/>
                            
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
            </ScrollView>
            
        </View>
    )
}

const Module5 = ()=>{


    return(
        <View
          style={Styles.containerModule}
        >
             <Text
             style={[Styles.title,{marginTop:80}]}
            >
               Existen condones que te brindan mayor sensación 
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
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            
                                <Image source={require('../Images/condon4.png')}  style={{width:350,height:250}}/>
                            
                        </View>
                        
                    </View>
                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'center',marginTop:50}}
                    >
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            
                                <Image source={require('../Images/condon5.png')}  style={{width:350,height:250}}/>
                            
                        </View>
                        
                    </View>

                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'center',marginTop:50}}
                    >
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            
                                <Image source={require('../Images/condon6.png')}  style={{width:350,height:250}}/>
                            
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
                            EventEmitter.emit('openModule4',true)
                            }}
                        >
                            <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                    </View>

                    
                </View>
            </ScrollView>
            
        </View>
    )
}


const Contraceptives = ()=>{

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


export default Contraceptives;
