import React ,{useEffect,useState}from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Linking
}from'react-native';

import EventEmitter from 'react-native-eventemitter';


import CheckBox from '@react-native-community/checkbox';

const Module1 = ()=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
    const [toggleCheckBox4, setToggleCheckBox4] = useState(false)
    const [toggleCheckBox5, setToggleCheckBox5] = useState(false)
    const [toggleCheckBox6, setToggleCheckBox6] = useState(false)

    return(
        <View
          style={Styles.containerModule1}
        >
            <Text
                style={Styles.title}
            >¿Alguna vez has escuchado alguna de las siguientes afirmaciones?</Text>
            <View style={{flexDirection:'row'}}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={Styles.description1}>
                La mujer siempre debe estar depilada
            </Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox1}
                onValueChange={(newValue) => setToggleCheckBox1(newValue)}
            />
            <Text style={Styles.description1}>
                Nadie se agota durante la penetración 
            </Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox2}
                onValueChange={(newValue) => setToggleCheckBox2(newValue)}
            />
            <Text style={Styles.description1}>
                La violencia siempre excita   
            </Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox3}
                onValueChange={(newValue) => setToggleCheckBox3(newValue)}
            />
            <Text style={Styles.description1}>
                Todas las mujeres gritan durante el orgasmo   
            </Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox4}
                onValueChange={(newValue) => setToggleCheckBox4(newValue)}
            />
            <Text style={Styles.description}>
                El orgasmo siempre llega   
            </Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox5}
                onValueChange={(newValue) => setToggleCheckBox5(newValue)}
            />
            <Text style={Styles.description1}>
                El sexo anal no necesita de preparación
            </Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox6}
                onValueChange={(newValue) => setToggleCheckBox6(newValue)}
            />
            <Text style={Styles.description}>
                El coito puede durar horas, sin parar.
            </Text>
            </View>

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
            >¡Vamos a aprender juntos!</Text>
            <Text
                style={Styles.description}
            >
                A continuación leerás algunos mitos  o creencias erróneas que han surgido como producto de lo que la pornografia ha planteado alrededor de las relaciones sexuales, en esta app entenderas que el sexo no sucede tal cual se muestra en ese tipo de contenido, así como tampoco presenta una totalidad de practicas sanas, seguras y saludables que debas copiar. 
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

const Module3 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >Entonces…¿todo es negativo en la pornografía?</Text>
            <Text
                style={Styles.description}
            >
                No, la pornografía esta teniendo cambios importantes y esta produciendo contenidos más realistas, en los cuales se evidencian practicas sexuales seguras, diferentes tipos de cuerpos, se le da relevancia a el consentimiento y demas aspectos que el porno tradicional no tenia en cuenta. Es importante que sepas que no está mal sentir curiosidad y  querer saber de sexualidad, pero debes saber de qué medios estas recibiendo esa información. 
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

        </View>
    )
}

const Module4 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >Vamos a desmentir algunos de estos mitos</Text>
            <Text
                style={Styles.description}
            >
                La mujer siempre debe estar depilada 
            </Text>
            <Text
                style={Styles.description}
            >
                NO, cada quien decide sobre su cuerpo, lo importante es tener una buena higiene, por tu salud y la de tu pareja.
            </Text>
            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule5',true)
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
                     EventEmitter.emit('openModule3',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
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
            >Vamos a desmentir algunos de estos mitos</Text>
            <Text
                style={Styles.description}
            >
                Nadie se agota durante la penetración 
            </Text>
            <Text
                style={Styles.description}
            >
                Falso, es completamente normal sentirse algo cansado, la idea es que disfruten de las relaciones sexuales, recuerda que no es competencia.
            </Text>
            
            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule6',true)
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
                     EventEmitter.emit('openModule4',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Module6 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >Vamos a desmentir algunos de estos mitos</Text>
            <Text
                style={Styles.description}
            >
                La violencia siempre excita 
            </Text>
            <Text
                style={Styles.description}
            >
                NO, lo mejor que puedes hacer es dialogar con tu pareja y así saber que les gusta y que no, así logran llegar a acuerdos.
            </Text>
            
            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule7',true)
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
                     EventEmitter.emit('openModule5',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Module7 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >Vamos a desmentir algunos de estos mitos</Text>
            <Text
                style={Styles.description}
            >
                El sexo anal no necesita de preparación.
            </Text>
            <Text
                style={Styles.description}
            >
                Falso, el sexo anal requiere de algunos preparativos para que sea más placentero, entre ellos el uso de lubricantes, higiene basica , condón y si lo deseas puedes hacer uso de juguetes sexuales para iniciar.
            </Text>
            

            <View
                style={Styles.leftButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule6',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Mitos = ()=>{

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

        EventEmitter.on('openModule6',()=>{
            setModuleActual(<Module6/>)
        })

        EventEmitter.on('openModule7',()=>{
            setModuleActual(<Module7/>)
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
    description1:{
        color:'#DC0FF9',
        fontSize:20,
        marginTop:15
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
    containerModule1:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFF'
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


export default Mitos;
