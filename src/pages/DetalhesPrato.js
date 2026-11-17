import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './DetalhesPrato.styles';

export function DetalhesPrato({ route, navigation }) {
  const { prato } = route.params;

  function handleConfirmarPedido() {
    Alert.alert(
      'Pedido Realizado!',
      `${prato.nome} (R$ ${prato.preco}) foi enviado para a cozinha.`
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#000000', '#800000', '#D32F2F', '#E64A19']}
        locations={[0, 0.4, 0.75, 1]}
        style={styles.background}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>{'< VOLTAR'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>STEAKHOUSE</Text>
          <View style={{ width: 65 }} />
        </View>

        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.pratoCategory}>{prato.categoria}</Text>
            <Text style={styles.pratoTitle}>{prato.nome}</Text>
            <Text style={styles.pratoPrice}>R$ {prato.preco}</Text>

            <View style={styles.divider} />

            <Text style={styles.descriptionLabel}>SOBRE O CORTE</Text>
            <Text style={styles.descriptionText}>{prato.descricao}</Text>
          </View>

          <TouchableOpacity style={styles.pedirButton} onPress={handleConfirmarPedido}>
            <Text style={styles.pedirText}>PEDIR</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}