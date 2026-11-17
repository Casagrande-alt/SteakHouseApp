import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Login.styles';

export function Login({ navigation }) {
  const [showInputs, setShowInputs] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#000000', '#800000', '#D32F2F', '#E64A19']}
        locations={[0, 0.4, 0.75, 1]}
        style={styles.background}
      >
        <View style={styles.container}>
          {/* <Image 
            source={require('../../assets/logo.png')} 
            style={styles.logoIcon}
            resizeMode="contain"
          /> */}
          <Text style={styles.title}>STEAKHOUSE</Text>

          <View style={styles.formContainer}>
            {!showInputs ? (
              <>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => setShowInputs(true)}
                >
                  <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => navigation.navigate('Cadastro')}
                >
                  <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="USER NAME"
                  placeholderTextColor="#CCCCCC"
                  value={username}
                  onChangeText={setUsername}
                />
                <TextInput
                  style={styles.input}
                  placeholder="PASSWORD"
                  placeholderTextColor="#CCCCCC"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />

                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => navigation.navigate('Cardapio')}
                >
                  <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.button, styles.backButton]}
                  onPress={() => setShowInputs(false)}
                >
                  <Text style={styles.buttonText}>VOLTAR</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}