import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type HomeProps = {
  navigation: NavigationProp<any>;
};

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JHOMD</Text>
      <Text style={styles.subtitle}>Trendy Clothing for Everyone</Text>
      
      <View style={styles.buttonGroup}>
        <CustomButton title="Services" onPress={() => navigation.navigate('Services')} />
        <CustomButton title="About" onPress={() => navigation.navigate('About')} />
        <CustomButton title="Settings" onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  );
};

const CustomButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  buttonGroup: {
    width: '80%',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Home;
