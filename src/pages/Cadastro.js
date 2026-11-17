import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Cadastro.styles';

export function Cadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
            <TextInput
              style={styles.input}
              placeholder="E-MAIL"
              placeholderTextColor="#CCCCCC"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="USERNAME"
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
            <TextInput
              style={styles.input}
              placeholder="CONFIRM PASSWORD"
              placeholderTextColor="#CCCCCC"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Cardapio')}
            >
              <Text style={styles.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.backButton]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>VOLTAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}