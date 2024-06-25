import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './home';
import Local from './Img/Local.png';
import Imagem3 from './Img/Bolacima.png';
import Baixo from './Img/Bolabaixo.png';
import Diferencial from './Img/Diferencial.png';

export default function App() {
    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if (page === 'sobre') {
        return (
      <View style={styles.container}>
        <Image source={Imagem3}/>
        <Image source={Local}/><br></br><br></br>
        <Image source={Diferencial} style={styles.img}/> <br></br><br></br>
        <Text style={styles.title}>Latitude: 0.00</Text>
        <Text style={styles.title}>Longitude: 0.00</Text><br></br>
        <TouchableOpacity style ={styles.button} onPress={() => setPage ('home')}>
        <Text style={styles.buttonText}>OBTER LOCALIZAÇÃO</Text>
        </TouchableOpacity>
        <Image source={Baixo} style={styles.img} />
      </View>
    );    
        } else if (page === 'home') {
          return <Home/>;
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
      width: 200,
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