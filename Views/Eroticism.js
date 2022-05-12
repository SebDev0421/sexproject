import React ,{useEffect,useState}from 'react';

import {
    View,
    Text,
    TouchableOpacity, 
    StyleSheet,
    Image,
    Linking,
    ScrollView
}from'react-native';

import EventEmitter from 'react-native-eventemitter';

const TextGames=(props)=>{
    return(
        <View style={Styles.container_main}>
            <Text
             style = {{fontSize:22,color:'#0FEAF9',marginBottom:20}}
            >{props.title}</Text>
            
            <Text
             style = {{fontSize:17,color:'#44F90F',marginTop:20}}
            >{props.description}</Text>
              
        </View>
    )
}

const Games = ()=>{
    return(
        <View style={Styles.container_main}>

            <Text
             style = {{fontSize:22,color:'#0FEAF9',marginBottom:20}}
            >Juegos Previo</Text>  
            
            
            <View
                 style={[Styles.button,{borderColor:'#44F90F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openMasajes',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Masajes eroticos</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#00FFEC'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openStripiase',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>El stripiase</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#F90FF5'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openKiss',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Besos Humedos</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#F9130F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openSometimiento',true);
                    }}
                >

                    <Text style={Styles.Text_Style}>Juegos de sometimiento</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const MenuEroticsm = ()=>{
    return(
        <View style={Styles.container_main}>
            <View
                 style={[Styles.button,{borderColor:'#0FEAF9'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openGame',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Juegos previos</Text>
                </TouchableOpacity>
            </View>
            
            <View
                 style={[Styles.button,{borderColor:'#44F90F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openSexualPractice',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Practica sexuales</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#00FFEC'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openPositions',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Posturas sexuales</Text>
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

const Positions = ()=>{

    let [popUp,setPopUp] = useState()

    return(
        <View 
            style={Styles.container_main}
        >

            <Text
             style={[Styles.title,{marginTop:80}]}
            >
                A Continuación te  presentamos algunas posturas sexuales
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
                             onPress={()=>{
                                 setPopUp(<PopUpResponse
                                    message={'La Bicileta'}
                                 />)
                             }}
                            >
                                <Image source={require('../Images/bicicleta.png')}  style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                                onPress={()=>{
                                    setPopUp(<PopUpResponse
                                    message={'La araña'}
                                    />)
                                }}
                            >
                                <Image source={require('../Images/araña.png')} style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'space-between',marginTop:50}}
                    >
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                             onPress={()=>{
                                 setPopUp(<PopUpResponse
                                    message={'El 69'}
                                 />)
                             }}
                            >
                                <Image source={require('../Images/69.png')}  style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                                onPress={()=>{
                                    setPopUp(<PopUpResponse
                                    message={'La carretilla'}
                                    />)
                                }}
                            >
                                <Image source={require('../Images/carretilla.png')} style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'space-between',marginTop:50}}
                    >
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                             onPress={()=>{
                                 setPopUp(<PopUpResponse
                                    message={'La vaquera'}
                                 />)
                             }}
                            >
                                <Image source={require('../Images/vaquera.png')}  style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                                onPress={()=>{
                                    setPopUp(<PopUpResponse
                                    message={'El delfin'}
                                    />)
                                }}
                            >
                                <Image source={require('../Images/delfin.png')} style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                     style={{marginBottom:50,flexDirection:'row',width:'90%',justifyContent:'space-between',marginTop:50}}
                    >
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                             onPress={()=>{
                                 setPopUp(<PopUpResponse
                                    message={'El trono del rey'}
                                 />)
                             }}
                            >
                                <Image source={require('../Images/trono.png')}  style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                                onPress={()=>{
                                    setPopUp(<PopUpResponse
                                    message={'El caracol'}
                                    />)
                                }}
                            >
                                <Image source={require('../Images/caracol.png')} style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                     style={{marginBottom:150,flexDirection:'row',width:'90%',justifyContent:'space-between',marginTop:50}}
                    >
                        <View style={{borderWidth:1,borderColor:'#FF6100',borderRadius:15,alignItems:'center',justifyContent:'center',width:150,height:150}}>
                            <TouchableOpacity
                             onPress={()=>{
                                 setPopUp(<PopUpResponse
                                    message={'La flor de loto'}
                                 />)
                             }}
                            >
                                <Image source={require('../Images/loto.png')}  style={{width:100,height:100}}/>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    
                </View>
            </ScrollView>
            {popUp}

        </View>
    )
}

const Practice = ()=>{
    return(
        <View style={Styles.container_main}>
            
            
            <View
                 style={[Styles.button,{borderColor:'#44F90F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openBugchasing',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Bugchasing</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#00FFEC'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openAutoStimulation',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Autoestimulacion</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#F90FF5'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openBondage',true);
                    }}
                >
                    <Text style={Styles.Text_Style}>Bondage</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#F9130F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        EventEmitter.emit('openChemsex',true);
                    }}
                >

                    <Text style={Styles.Text_Style}>Chemsex</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}



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

const Module3 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >Prácticas sexuales inapropiadas</Text>
            <Text
                style={Styles.description}
            >
                Dentro de la industria de la pornografía podemos encontrar diverso material pornográfico, muchos de estos pueden ser practicas inapropiadas e ilegales, aquí te contamos cuales son y por que no deberían ser vistos
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
            >Prácticas sexuales inapropiadas</Text>
            <Text
                style={Styles.description}
            >
                Es cierto que ha muchas personas les gusta tener sexo rudo, lo que no esta mal, siempre y cuando todo sea consensuado y todas las personas que participen del acto sexual esten 100% seguras de que lo quieren hacer
            </Text>
            <Text
                style={Styles.description}
            >
                En el mundo de la pornografía hay mucho material sobre este tipo de actos sexuales, sin embargo debemos tener en cuenta que este mundo tambien esta lleno de ilegalidad y crimenes, por lo que debemos evitar ver este tipo de material si no estamos seguros de que es una actuación ya que podrias estar aportando al mundo de
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
            >Trata de personas</Text>
            
            <Image source={require('../Images/personsTrate.png')} style={{width:'90%',height:200}}/>
            <Text
                style={Styles.description}
            >
                Da clic en el link para ver la noticia sobre la trata de personas y pornografía 
            </Text>

            <Text
                style={Styles.link}
                onPress={()=>{
                    Linking.openURL('https://lasillarota.com/lacaderadeeva/la-trata-de-personas-y-su-relacion-con-el-consumo-pornografico/418593')
                }}
            >
                 La trata de personas
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
            >Esclavitud</Text>
            
            <Image source={require('../Images/esclavitud.png')} style={{width:'90%',height:200}}/>
            <Text
                style={Styles.description}
            >
               Da clic en el link para ver la noticia sobre la esclavitud y pornografía 

            </Text>

            <Text
                style={Styles.link}
                onPress={()=>{
                    Linking.openURL('https://solidaridad.net/la-pornografia-en-las-redes-destrozo-social-esclavitud-y-abuso-de-menores/')
                }}
            >
                 Esclavitud
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
            >Abuso y explotación comercial y sexual de niños, niñas, adolescentes</Text>
            
            <Image source={require('../Images/children.png')} style={{width:'90%',height:200}}/>
            <Text
                style={Styles.description}
            >
              Da clic en el link para ver la noticia sobre el Abuso y explotación comercial y sexual de niños, niñas, adolescentes y pornografía 
            </Text>

            <Text
                style={Styles.link}
                onPress={()=>{
                    Linking.openURL('https://www.univision.com/local/sacramento-kuvs/padre-abusa-sexualmente-hija-pornografia-infantil-sacramento   ')
                }}
            >
                 Esclavitud
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

const Eroticism = ()=>{

    let [actualModuleView,setModuleActual] = useState(<MenuEroticsm/>)
    let [subModule , setSubModule] = useState()

    useEffect(()=>{

        EventEmitter.on('openGame',()=>{
            setModuleActual(<Games/>)
        })

        EventEmitter.on('openSexualPractice',()=>{
            setModuleActual(<Practice/>)
        })

        EventEmitter.on('openPositions',()=>{
            setModuleActual(<Positions/>)
        })

        EventEmitter.on('openMasajes',()=>{
            setModuleActual(<TextGames 
                 title={'Masajes eróticos'}
                 description = {'Perfumar el ambiente con un aroma que les guste y hacer uso de aceites para realizar el masaje'}
            />)
        })

        EventEmitter.on('openStripiase',()=>{
            setModuleActual(<TextGames 
                title={'El striptease'}
                description = {'Consiste en quitarse la ropa lentamente, con movimientos sensuales, mientras mantiene la mirada en tu pareja. '}
           />)
        })

        EventEmitter.on('openKiss',()=>{
            setModuleActual(<TextGames 
                title={'Besos humedos'}
                description = {'Inicia con un beso suave y avanza con a un ritmo más intenso.'}
           />)
        })

        EventEmitter.on('openSometimiento',()=>{
            setModuleActual(<TextGames 
                title={'Juegos de sometimiento'}
                description = {'Hacer un ambiente agradable, luego atar manos y piernas de su pareja. Adicionalmente, vendarles los ojos.'}
           />)
        })

        EventEmitter.on('openBugchasing',()=>{
            setModuleActual(<TextGames 
                title={'Bugchasing'}
                description = {'Se trata de realizar prácticas sexuales con el objetivo expreso de adquirir el VIH, el virus del sida.'}
           />)
        })

        EventEmitter.on('openAutoStimulation',()=>{
            setModuleActual(<TextGames 
                title={'Autoestimulación'}
                description = {'Tocar tu propio cuerpo y tus zonas íntimas, es una experiencia íntima que contribuye al conocimiento de tu propia respuesta sexual.'}
           />)
        })
        
        EventEmitter.on('openBondage',()=>{
            setModuleActual(<TextGames 
                title={'Bondage'}
                description = {'Hace referencia a atar o ser atado, con el propósito de sentir dominación o sumisión'}
           />)
        })

        EventEmitter.on('openChemsex',()=>{
            setModuleActual(<TextGames 
                title={'Chemsex'}
                description = {'Sexo practicado en entornos de alcohol y otras drogas habitualmente, en fiestas suele realizarse sin protección, múltiples parejas sexuales y sin ser muy conscientes de lo que se esta haciendo.'}
           />)
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
    container_main:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
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
    },
    Text_Style:{
        color:'#FFFF'
    }
})


export default Eroticism;
