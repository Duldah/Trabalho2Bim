import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Sobre from './sobre';

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
        return (
      <View style={styles.container}>
        <Text style={styles.title}>Página Principal</Text>
        <Text style={styles.title}> Exemplo 1</Text>
        <TouchableOpacity style ={styles.button} onPress={() => setPage ('sobre')}>
        <Text style={styles.buttonText}>Clique aqui</Text>
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
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      fontSize: 16,
    },
    buttonText: {
      backgroundColor: '#FFFFFF',
      fontSize: 16,
    },
  });
  