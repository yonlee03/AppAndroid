import React, { useState } from 'react';
import { Text, Image, TextInput, View, StyleSheet, Button, Switch, Alert,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Form() {
  const [nombre, setNombre] = useState('')
  const [validaName, setValidaName]= useState(false)
  const [validaApellid, setValidaApellid]= useState(false)
  const [validaEdad, setValidaEdad]= useState(false)
  const [validaEmail, setValidaEmail]= useState(false)
  const [apellidos, setApellidos] = useState('')
  const [camposC, setCamposC]= useState(false)
  const [edad, setEdad] = useState('')
  const [correo, setCorreo] = useState('')
  const [sexo, setSexo] = useState('')
  const [imagen, setImagen]= useState(null)
  const [texto, setTexto] = useState(null);
  const validaTexto =/[a-zA-ZÁ-ÿ\s]+$/;
  const validaNum =/[0-9\s]+$/;
  const validaCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z\s]+$/
  const [isEnabled, setIsEnabled] = useState();
  const [display, setDisplay] = useState();
  
  function validaCampos(nombre,apellidos,edad,correo){
    if((validaName && validaApellid &&  validaEdad && validaEmail)==true ){
      setCamposC(true)
    }else{
      Alert.alert("Faltan Campos")
      setCamposC(false)
    }

  }

  function ExampleView(props) {
    return <Icon name="account-circle" size={20} color="#4F8EF7" />;
  }

  function ExampleView2(props) {
    return <Icon name="alien" size={20} color="#4F8EF7" />;
  }

  function ExampleView3(props) {
    return <Icon name="alpha-i-box" size={20} color="#4F8EF7" />;
  }

  function ExampleView4(props) {
    return <Icon name="alpha-j-box" size={20} color="#4F8EF7" />;
  }

  function ExampleView5(props) {
    return <Icon name="alpha-l-circle-outline" size={20} color="#4F8EF7" />;
  }
  const resultado = () => {
      setSexo(isEnabled ? 'Mujer' : 'Hombre')
      setDisplay('on')
      validaCampos(nombre,apellidos,edad,correo)
      if(display=='on' && camposC==true){
        setTexto('Mi nombre es '+nombre+'\nMis apellidos son '+apellidos+
        '\nMis edad es '+edad+'\nMis correo es '+correo+'\nMis sexo es '+sexo)
        setImagen('https://i.pinimg.com/originals/f4/97/d5/f497d55088aba26d78c26958a636b97a.gif')
      }else{
        setTexto("")
        setImagen(null)
      }
  }
  function validadorNombre(name){
    if(validaTexto.test(name)){
      console.log('Validar 1')
      setValidaName(true)
      setNombre(name)
    }else{
      setValidaName(false)
      setNombre(null)
    }
  }
  function validadorApellido(apellido){
    if(validaTexto.test(apellido)){
      console.log('Validar 2')
      setValidaApellid(true)
      setApellidos(apellido)
    }else{
      setValidaApellid(false)
      setApellidos(null)
    }
  }
    function validadorEdad(edad){
      if(validaNum.test(edad)){
        console.log('Validar 3')
        setValidaEdad(true)
        setEdad(edad)
      }else{
        setValidaEdad(false)
        setEdad(null)
      }
  }
  function validadorCorreo(correo){
    if(validaCorreo.test(correo)){
      console.log('Validar 4')
      setValidaEmail(true)
      setCorreo(correo)
    }else{
      setValidaEmail(false)
      setCorreo(null)
    }
}

  return (
    <View style={styles.CentradoV}>
      <Text style={styles.Centrado}>FORM</Text>
      <View style={styles.TextoV}>
        {ExampleView()}
        <Text style={styles.Texto}>DIME TU NOMBRE  </Text>
        <TextInput style={validaName ? [styles.VerdeV]:[styles.RojoV]}
          onChangeText={nombre => validadorNombre(nombre)}
          />
      </View>
      <View style={styles.TextoV}>
        {ExampleView2()}
        <Text style={styles.Texto}>DIME TU APELLIDO</Text>
        <TextInput style={validaApellid ? [styles.VerdeV]:[styles.RojoV]}
          value={apellidos}
          onChangeText={apellidos => validadorApellido(apellidos)}
          />
      </View>

      <View style={styles.TextoV}>
        {ExampleView3()}
        <Text style={styles.Texto}>DIME TU EDAD        </Text>
        <TextInput style={validaEdad ? [styles.VerdeV]:[styles.RojoV]}
          value={edad}
          onChangeText={edad => validadorEdad(edad)}
          />
      </View>

      <View style={styles.TextoV}>
        {ExampleView4()}
        <Text style={styles.Texto}>DIME TU CORREO  </Text>
        <TextInput style={validaCorreo ? [styles.VerdeV]:[styles.RojoV]}
          onChangeText={correo => validadorCorreo(correo)}
          
         />
      </View>

      <View style={styles.TextoV}>
      {ExampleView5()}
      <Text style={styles.Texto}>Hombre                       </Text>
        <Switch
          Text={{ false: 'white', true: 'grey' }}
          trackColor={{ false: 'white', true: 'grey' }}
          thumbColor={isEnabled ? 'pink' : '#58E0F6'}
          onValueChange={() => setIsEnabled(previusState => !previusState)}
          value={isEnabled}
           />
          <Text style={styles.Texto}>                    Mujer</Text>
      </View>
      <Text numberOfLines={1} style={{color:'white',marginBottom:10}}>____________________________________________________</Text> 
      <Button 
          title="FINALIZAR"
          onPress={resultado} />
      <Text numberOfLines={1} style={{color:'white'}}>____________________________________________________</Text> 
      <Text style={styles.Azul}>{texto}</Text>
      <Text numberOfLines={1} style={{color:'white'}}>____________________________________________________</Text> 
      <Image style={{width: 100, height: 100, marginTop:5}} source={{
        uri: imagen,}}/>
        
       
        
    </View>
  );
}

const styles = StyleSheet.create({
  Verde: {
    color: "green",
    fontWeight: 'bold',
    fontSize: 15,
  },
  Rojo: {
    color: "red",
    fontWeight: 'bold',
    fontSize: 15,
  },
  Azul: {
    marginTop:5,
    color: "#3393FF",
    fontWeight: 'bold',
    fontSize:15,
  },
  RojoV: {
    color: "red",
    fontWeight: 'bold',
    marginLeft: 20,
    height: 40,
    width: 170,
    textAlign: "center",
    borderColor: "#3198EE",
    borderWidth: 2,
  },
  VerdeV: {
    color: "green",
    fontWeight: 'bold',
    marginLeft: 20,
    height: 40,
    width: 170,
    textAlign: "center",
    borderColor: "#3198EE",
    borderWidth: 2,
  },
  Centrado: {
    marginTop:80,
    color: "#58E0F6",
    fontWeight: 'bold',
    fontSize: 50,
    alignItems: 'center',
    textAlign: "center",
  },
  CentradoV: {
    flex:1,
    backgroundColor:'black',
    color: "#58E0F6",
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'center',
    textAlign: "center",
  },
  TextoV: {
    flexDirection: 'row',
    marginTop: 20,
    fontSize: 15,
  },
  Texto: {
    marginTop: 9,
    fontSize: 15,
    
    marginLeft:20,
    marginBottom:10,
    color:'white'
  },
  TextImp: {
    marginLeft: 20,
    height: 40,
    width: 170,
    color:'white',
    textAlign: "center",
    borderColor: "#3198EE",
    borderWidth: 2,
  },
  Boton: {
    marginTop: 9,
    fontSize: 15,
  },
});

