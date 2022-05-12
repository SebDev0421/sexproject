import React ,{useState}from 'react';

import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    LogBox
}from'react-native';

import EventEmitter from 'react-native-eventemitter';


LogBox.ignoreAllLogs(true)

const Knowself = ()=>{

    let [description,setDescription] = useState()

    return(
        <View
         style={Styles.container}
        >
            <Text
             style={Styles.title}
            >Conocimiento</Text>
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
            <View>
                <Image source={require('../Images/body.png')}
                    style={Styles.bodyImg}
                />
                <TouchableOpacity
                    onPress={()=>{
                        setDescription(<Image source={require('../Images/identyti.jpeg')} style={{width:300,height:180,position:'absolute'}}/>)
                    }}
                    style={{position:'absolute',top:20,left:37}}
                >
                    <Image source={require('../Images/rec.png')} style={Styles.point}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        setDescription(<Image source={require('../Images/orientation.jpeg')} style={{width:300,height:180,position:'absolute'}}/>)
                    }}
                    style={{position:'absolute',top:67,right:42}}
                >
                    <Image source={require('../Images/rec.png')} style={Styles.point}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        setDescription(<Image source={require('../Images/expression.jpeg')} style={{width:300,height:180,position:'absolute'}}/>)
                    }}
                    style={{position:'absolute',top:308,left:5}}
                >
                    <Image source={require('../Images/rec.png')} style={Styles.point}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        setDescription(<Image source={require('../Images/sex.jpeg')} style={{width:300,height:180,position:'absolute'}}/>)
                    }}
                    style={{position:'absolute',top:300,right:5}}
                >
                    <Image source={require('../Images/rec.png')} style={Styles.point}/>
                </TouchableOpacity>
                <View
                    style={Styles.containerDescription}
                >
                    {description}
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'#000',
        alignItems:'center'
    },
    bodyImg:{
        width:370,
        height:500
    },
    title:{
        color:'#0FEAF9',
        fontSize:25,
        marginTop:15,
        marginBottom:30
    },
    point:{
        width:40,
        height:40
    },
    imgBack:{
        width:60,
        height:60
    },
    back:{
        position:'absolute',
        top:10,
        left:10
    },
    containerDescription:{
        width:'100%',
        position:'absolute',
        bottom:0
    }

})

export default Knowself;
