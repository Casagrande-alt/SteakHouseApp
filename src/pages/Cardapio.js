import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Cardapio.styles';

const PRATOS = [
  { 
    id: '1', 
    nome: 'PICANHA PREMIUM', 
    categoria: 'NOBRE', 
    preco: '120,00',
    descricao: 'O corte mais nobre do churrasco brasileiro, retirado da parte traseira do boi. Com formato triangular e espessa capa de gordura externa, garante extrema maciez e suculência na grelha.'
  },
  { 
    id: '2', 
    nome: 'ANCHO RECHEADO', 
    categoria: 'ESPECIAL', 
    preco: '88,00',
    descricao: 'Retirado da parte dianteira do contrafilé, possui alto nível de marmoreio. Preparado com recheio especial da casa para intensificar sua maciez e sabor amanteigado.'
  },
  { 
    id: '3', 
    nome: 'TOMAHAWK 1 KG', 
    categoria: 'ESPECIAL', 
    preco: '125,00',
    descricao: 'Corte imponente que une a maciez do miolo do ancho ao sabor marcante do osso longo da costela. Ideal para compartilhar, entrega suculência e apresentação únicas.'
  },
  { 
    id: '4', 
    nome: 'PRIME RIB', 
    categoria: 'NOBRE', 
    preco: '140,00',
    descricao: 'Corte nobre extraído da caixa torácica do boi, composto pelo miolo do contrafilé com osso. Seu marmoreio entremeado às fibras proporciona textura que desmancha na boca.'
  },
];

export function Cardapio({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#000000', '#800000', '#D32F2F', '#E64A19']}
        locations={[0, 0.4, 0.75, 1]}
        style={styles.background}
      >
        <Text style={styles.headerTitle}>STEAKHOUSE</Text>
        
        <FlatList
          data={PRATOS}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardInfo}>
                <Text style={styles.pratoTitle}>{item.nome}</Text>
                <Text style={styles.pratoCategory}>{item.categoria}</Text>
                <Text style={styles.pratoPrice}>{item.preco}</Text>
              </View>
              <TouchableOpacity 
                style={styles.pedirButton}
                onPress={() => navigation.navigate('DetalhesPrato', { prato: item })}
              >
                <Text style={styles.pedirText}>PEDIR</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}