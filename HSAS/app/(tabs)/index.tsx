import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Welcome to JHOMD</Text>
      
      {/* Description Text */}
      <Text style={styles.description}>
        This is the starting point of your app. You can navigate to other pages using the buttons below.
      </Text>
      
      {/* Buttons for navigation, arranged vertically */}
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Services"
          onPress={() => navigation.navigate('Services')}
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </View>
  );
};

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // light background color
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 20, // Add some padding to avoid text touching edges
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 40, // Adds some horizontal padding to center the buttons
  },
  buttonSpacing: {
    marginBottom: 15, // Adds space between buttons
  },
});

export default Home;
