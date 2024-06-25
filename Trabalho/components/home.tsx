import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Sobre from './sobre';
import Imagem1 from './Img/logo.png';
import Imagem2 from './Img/principal.png';
import Daylocal from './Img/Daylocal.png';
import Imagem3 from './Img/Bolacima.png';
import Baixo from './Img/Bolabaixo.png';

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
        return (
      <View style={styles.container}>
        <Image source={Imagem3}/>
        <Image source={Imagem1} style={styles.img} /><br></br>
        <Image source={Imagem2}/><br></br><br></br>
        <Text style={styles.title}> Onde quer que você vá, </Text>
        <Text style={styles.title}>  o <Image source={Daylocal}/> te leva!</Text><br></br>
        <TouchableOpacity style ={styles.button} onPress={() => setPage ('sobre')}>
        <Text style={styles.buttonText}>ENTRAR</Text>

        </TouchableOpacity>
        <Image source={Baixo} style={styles.img} />
      </View>
    );    
        } else if (page === 'sobre') {
          return <Sobre/>;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
  
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginBottom: 20,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },

    button: {
      backgroundColor: '#06B193',
      padding: 10,
      width: 100,
      borderRadius: 10,
      fontSize: 16,
    },
    buttonText: {
      color: '#FFFF',
      fontSize: 16,
      textAlign: 'center',
    },

    img: {
      padding: 10,
    },
  });
  