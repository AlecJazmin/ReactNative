import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type SettingsProps = {
  navigation: NavigationProp<any>;
};

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Settings: React.FC<SettingsProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Manage your preferences and app settings.</Text>
      
      <View style={styles.buttonGroup}>
        <CustomButton title="Go to Home" onPress={() => navigation.navigate('Home')} />
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
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

export default Settings;
