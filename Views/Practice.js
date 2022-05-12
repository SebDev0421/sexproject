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

const Module1 = ()=>{
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
                Si has visto pornografía seguramente te habras encontrado con videos que tratan diversos temas como, incesto, teens, anal, bondage, infantil o menores de edad, zoofilia, entre otros debes tener mucho cuidado si piensas consumir pornografía ya que muchas veces esto puede tener una historia detras
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
                     EventEmitter.emit('openModule5',true)
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
            >RUTAS DE EMERGENCIA</Text>
            <Text
                style={Styles.title}
            >¡Permanece atento a cada señal y situación!</Text>
            
            <Text
                style={Styles.description}
            >
                Cuando veas pornografía infantil, ten en cuenta hacer tu denuncia en teprotejocolombia.org, aquí tu denuncia será anónima y ayudará a hacerle seguimiento en aras de acabar con esto. 

                Instituto Colombiano de Bienestar Familiar
                Teléfonos: 01 8000 918080 ó (1) 660 5520, (1) 660 5530, (1) 660 5540
                Horario: 7am a 9pm de lunes a domingo

                Zoofilia, una práctica sexual de maltrato animal, para hacer tu renuncia marca al 123 y reporta cualquier contenido implícito y explícito que encuentres. 

                Dirección central de policía judicial - dijin
                grupo investigativo delitos informáticos
                Carrera 77A # 45-61 Barrio Modelia
                Teléfonos: PBX: 426 6900 Ext. 6301-6302 Directo: 426 6300 
            </Text>

           

            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule8',true)
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
                     EventEmitter.emit('openModule6',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const Module8 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            
            <Text
                style={Styles.description}
            >
               En el porno normalmente verás vaginas y penes casi que perfectos, completamente depilados y del tamaño y apariencia que socialmente nos han dicho que es la adecuada estéticamente, sin embargo esto no es así en la vida real.
            </Text>

            <Text style={{color:'#74FF00',fontSize:18}}>
            En los videos muchas veces se usa edición, o se graba desde ciertos ángulos para tener las mejores escenas.
            </Text>

            <Text>
                Aquí puedes ver testimonios que lo confirma:
            </Text>

            <TouchableOpacity
             style={{marginBottom:10,marginTop:10}}
             onPress={()=>{
                Linking.openURL('https://youtu.be/9-YVFo7lhzo')
             }}
            >
                <Text style={{color:'#74FF00'}}>https://youtu.be/9-YVFo7lhzo</Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={()=>{
                Linking.openURL('https://www.youtube.com/watch?v=X0ayUk0uW4M')
             }}
            >
                <Text style={{color:'#74FF00'}}>https://www.youtube.com/watch?v=X0ayUk0uW4M</Text>
            </TouchableOpacity>


           

            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule9',true)
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
                     EventEmitter.emit('openModule7',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const Module9 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >EXISTEN VARIOS TIPOS DE VAGINAS, AQUÍ TE MOSTRAMOS SOLO ALGUNOS </Text>
            
            
            <Image
             source={require('../Images/pussys.png')}
             style={{width:300,height:300}}
            />           

            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule10',true)
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
                     EventEmitter.emit('openModule8',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Module10 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >TAMBIÉN VARIOS TIPOS DE PENES, AQUÍ TE MOSTRAMOS SOLO ALGUNOS</Text>
            
            
            <Image
             source={require('../Images/dicks.png')}
             style={{width:300,height:300}}
            />           

            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule11',true)
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
                     EventEmitter.emit('openModule9',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Module11 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >PERO LOS CUERPO NO ES LO ÚNICO QUE NO NOS MUESTRAN TAL CUAL ES, UN EJEMPLO DE ESTO ES LA FORMA EN LA QUE SE VEN LOS ORGASMOS</Text>
            
            <Text
                style={Styles.description}
            >
             Aquí te mostramos una ilustración del famoso “Squirt” que hace referencia a una cantidad de líquido que expulsan algunas mujeres a través de la uretra durante la estimulación sexual, sin embargo solo lo experimentan entre un 15 y 55% de las mujeres. 
            </Text>

            


            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule12',true)
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
                     EventEmitter.emit('openModule10',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const Module12 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >¿PERO LOS ORGASMOS DE LAS MUJERES SIEMPRE SON SQUIRT?</Text>
            
            <Text
                style={Styles.description}
            >
             NO,  las mujeres pueden llegar a tener un orgasmo estimulando distintas formas de su cuerpo, esto es debido a que existen varios tipos de orgasmos, aquí te contamos sobre algunos  
            </Text>

            


            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule13',true)
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
                     EventEmitter.emit('openModule11',true)
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

const Module13 = ()=>{

    let[popUp,setPopUp] = useState()
    return(
        <View style={Styles.containerModule}>
            
            
            <View
                 style={[Styles.button,{borderColor:'#44F90F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        setPopUp(<PopUpResponse
                            message={'Sola o en pareja, estimula otras partes del cuerpo y los alrededores del clítoris antes de llegar a este.'}
                           />)
                    }}
                >
                    <Text style={Styles.Text_Style}>Orgasmo clitoriano</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#00FFEC'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        setPopUp(<PopUpResponse
                            message={'Un cojín debajo de tus nalgas para levantar la zona pélvica e introduce dos dedos juntos y haz presiones sobre la pared anterior. Estimular esta zona puede producirte una sensación muy placentera o, a veces, ganas de hacer pis. '}
                           />)
                    }}
                >
                    <Text style={Styles.Text_Style}>Orgasmo vaginal</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#F90FF5'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        setPopUp(<PopUpResponse
                            message={'Para estimular esta zona debes estar muy concentrada y relajada. Puede suceder por medio de la penetración, en posición de cuatro, o con los dedos de tu pareja lo más profundo posible. Si estás sola, puedes hacerlo tú misma de igual manera o con un juguete sexual.'}
                           />)
                    }}
                >
                    <Text style={Styles.Text_Style}>Orgasmo uterino</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#F9130F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        setPopUp(<PopUpResponse
                            message={'Es la obtención de varios orgasmos. Es natural con la estimulación adecuada y los hombres​ que no tienden a presentar un período refractario o que han aprendido a identificar el punto de no retorno que desencadena la eyaculación.'}
                           />)
                    }}
                >

                    <Text style={Styles.Text_Style}>Orgasmo Multiple</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#F9130F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        setPopUp(<PopUpResponse
                            message={'Una combinación del orgasmo del clítoris y el vaginal. Se debe tener los dos al mismo tiempo para sentir, el placer que supone experimentarlo es el mayor de todos.'}
                           />)
                    }}
                >

                    <Text style={Styles.Text_Style}>Orgasmo mixto</Text>
                </TouchableOpacity>
            </View>

            {popUp}

            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule14',true)
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
                     EventEmitter.emit('openModule12',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const Module14 = ()=>{
    return(
        <View
          style={Styles.containerModule}
        >
            <Text
                style={Styles.title}
            >¿Y SI HABLAMOS DE LA EYACULACIÓN MASCULINA?</Text>
            
            <Text
                style={Styles.description}
            >
             Cuando hablamos de eyaculación, ten presente que la habitual es durar por mucho en la práctica sexual de 14 a 35 minutos.  
            </Text>

            <Text
                style={Styles.description}
            >
             ¡Importante! Ten presente que si bien eyacular no dura en promedio más de media hora, si eyaculas antes o al minuto de iniciar la práctica sexual no es normal.   
            </Text>

            


            <View
                style={Styles.nextButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule15',true)
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
                     EventEmitter.emit('openModule13',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Module15 = ()=>{

    let[popUp,setPopUp] = useState()
    return(
        <View style={Styles.containerModule}>
            
            
            <View
                 style={[Styles.button,{borderColor:'#44F90F'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        setPopUp(<PopUpResponse
                            message={'Es importante que sepas que este se compone de dos etapas: en la inicial, el semen se concentra en la uretra posterior mientras el pene está erecto y en la segunda etapa es cuando estalla el orgasmo.'}
                           />)
                    }}
                >
                    <Text style={Styles.Text_Style}>Orgasmo tradicional</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#00FFEC'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        setPopUp(<PopUpResponse
                            message={'Surge de la estimulación tanto externa como interna y lenta del punto P, que es esa franja de piel que va desde los testículos hasta el ano.'}
                           />)
                    }}
                >
                    <Text style={Styles.Text_Style}>Orgasmo anal o del punto P</Text>
                </TouchableOpacity>
            </View>

            <View
                 style={[Styles.button,{borderColor:'#F90FF5'}]}
            >
                <TouchableOpacity
                    style={Styles.touchable_inflate}
                    onPress = {()=>{
                        setPopUp(<PopUpResponse
                            message={'En este  no hay expulsión del semen. Esto puede darse intencionalmente, a través de prácticas como el  sexo tántrico, o por causas involuntarias y meramente físicas.'}
                           />)
                    }}
                >
                    <Text style={Styles.Text_Style}>Orgasmo seco u orgasmo retrógrado</Text>
                </TouchableOpacity>
            </View>


            {popUp}

            

            <View
                style={Styles.leftButtom}
            >
                <TouchableOpacity
                 onPress={()=>{
                     EventEmitter.emit('openModule14',true)
                 }}
                >
                    <Image source = {require('../Images/left.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const Practice = ()=>{

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

        EventEmitter.on('openModule8',()=>{
            setModuleActual(<Module8/>)
        })

        EventEmitter.on('openModule9',()=>{
            setModuleActual(<Module9/>)
        })

        EventEmitter.on('openModule10',()=>{
            setModuleActual(<Module10/>)
        })

        EventEmitter.on('openModule11',()=>{
            setModuleActual(<Module11/>)
        })

        EventEmitter.on('openModule12',()=>{
            setModuleActual(<Module12/>)
        })

        EventEmitter.on('openModule13',()=>{
            setModuleActual(<Module13/>)
        })

        EventEmitter.on('openModule14',()=>{
            setModuleActual(<Module14/>)
        })

        EventEmitter.on('openModule15',()=>{
            setModuleActual(<Module15/>)
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


export default Practice;
