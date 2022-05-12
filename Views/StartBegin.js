import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
}from'react-native';

import EventEmitter from 'react-native-eventemitter';


const StartBegin = ()=>{
    return(
        <View
            style={Styles.container_begin}
        >
         <Image source={require('../Images/logo.png')}
                style={{width:200,height:200,marginTop:30}}
         />
            <Text
             style={Styles.Title}
            >
            ¡Hola!, bienvenidas y bienvenidos a “PORN, sexualmente educado”
            </Text>
            <Text
                style={Styles.description}
            >
                Somos un grupo de estudiantes de psicología de la Universidad Católica de Colombia y queremos ayudarte a mejorar la perspectiva y el conocimiento que tienes sobre el erotismo y la vida sexual brindándote una guía para alcanzar una sexualidad sana y placentera.
            </Text>
            <View
                style={Styles.content_button}
            >
                <TouchableOpacity
                    style={Styles.button_begin}
                    onPress={()=>{
                        EventEmitter.emit('getting',true)
                    }}
                >
                    <Text
                        style={{color:'#FFFF',fontSize:18}}
                    >Empezemos</Text>
                    <Image source={require('../Images/next.png')}
                           style={{width:70,height:70}}
                    />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const Styles = StyleSheet.create({
    container_begin:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000'
        
    },
    Title:{
        marginTop:20,
        color:'#0FE0F9',
        fontSize:25   
    },
    description:{
        color:'#F9600F',
        width:'80%',
        marginTop:30,
        fontSize:20
    },
    content_button:{
        width:'70%',
        height:50,
        marginTop:20,
        borderWidth:1,
        borderRadius:15,
        borderColor:'#3500FF'
    },
    button_begin:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'100%'
    }
})


export default StartBegin;
