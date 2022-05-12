// this view buttons navigations betwen sections



import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
}from'react-native';
import EventEmitter from 'react-native-eventemitter';

const Main = ()=>{
    return(
        <View style={Styles.container_main}>
            <Image source={require('../Images/title.png')}/>
            <View
                 style={[Styles.button,{borderColor:'#0FEAF9'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openKnow',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Conocimiento</Text>
                </TouchableOpacity>
            </View>
            
            <View
                 style={[Styles.button,{borderColor:'#44F90F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openPractice',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Practicas inapropiadas</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#44F90F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        console.log('open Porn ')
                        EventEmitter.emit('openPorn',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Pornografia</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#00FFEC'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openMitos',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Mitos y realidades</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#F90FF5'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openEroticism',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Erotismo</Text>
                </TouchableOpacity>
            </View>

            

            <View
                 style={[Styles.button,{borderColor:'#0F79F9'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openInfections',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Infecciones</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#F9130F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openContraceptives',true);
                    }}
                >

                    <Text style={Styles.Text_Style}>Anticonceptivos</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const Styles = StyleSheet.create({
    container_main:{
        position:'absolute',
        backgroundColor:'#000',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    Text_Style:{
        color:'#FFFF'
    },
    button:{
        borderWidth:1,
        borderRadius:10,
        height:50,
        width:'70%',
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center'
    },
    touchable_inflate:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})


export default Main;
