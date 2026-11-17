import React, { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Welcome.styles';

export function Welcome({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#000000', '#800000', '#D32F2F', '#E64A19']}
        locations={[0, 0.4, 0.75, 1]}
        style={styles.background}
      >
        <TouchableOpacity 
          style={styles.container} 
          activeOpacity={0.9} 
          onPress={() => navigation.navigate('Login')}
        >
          {/* <Image 
            source={require('../../assets/icon.png')} 
            style={styles.logoIcon}
            resizeMode="contain"
          /> */}
          <Text style={styles.title}>STEAKHOUSE</Text>
          <Text style={styles.subtitle}>Bem-Vindo(A)</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}