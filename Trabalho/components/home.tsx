import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Sobre from './sobre';
import Imagem1 from './Img/logo.png';
import Imagem2 from './Img/principal.png';
import Imagem3 from './Img/Daylocal.png';

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
        return (
      <View style={styles.container}>
        <Image source={Imagem1}/>
        <Image source={Imagem2}/>
        <Text style={styles.title}> Onde quer que você vá, </Text>
        <Text style={styles.title}>  o <Image source={Imagem3}/> te leva!</Text>
        <TouchableOpacity style ={styles.button} onPress={() => setPage ('sobre')}>
        <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
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
      borderRadius: 5,
      fontSize: 16,
    },
    buttonText: {
      backgroundColor: '#FFFFFF',
      fontSize: 16,
    },
  });
  