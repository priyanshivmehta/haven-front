import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={{ uri: 'https://www.trippspaint.com/cdn/shop/products/B4ECE3.png?v=1654550226' }} // Remote image URL
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      {/* Title and Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to Haven</Text>
      <Text style={styles.subtitleText}>Your personal safety companion</Text>

      {/* Location Section */}
      <View style={styles.locationSection}>
        <Feather name="map-pin" size={24} color="#0a7ea4" />
        <Text style={styles.locationText}>Current Location: Unfamiliar Area</Text>
        <Button 
          title="View Map" 
          color="#0a7ea4"
          onPress={() => navigation.navigate('Maps')} 
          style={styles.mapButton}
        />
      </View>

      {/* Quick Access Buttons */}
      <View style={styles.quickAccessSection}>
        <Button 
          title="Capture Emergency" 
          onPress={() => navigation.navigate('UploadPage')} 
          color="#ff4f5e"
        />
        <Button 
          title="Emergency Contacts" 
          onPress={() => navigation.navigate('EmergencyContacts')} 
          color="#0a7ea4"
        />
        <Button 
          title="Check Alerts" 
          onPress={() => navigation.navigate('AlertsPage')} 
          color="#ffcc00"
        />
      </View>

      {/* Safety News */}
      <View style={styles.safetyUpdates}>
        <Text style={styles.safetyText}>Latest Safety Alert:</Text>
        <Text style={styles.safetyMessage}>Stay alert, high-theft area detected nearby!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  backgroundImage: {
    opacity: 0.6, // Slight opacity to keep content clear
    resizeMode: 'cover',
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#ffffff',
  },
  subtitleText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#ffffff',
  },
  locationSection: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  locationText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
    color: '#687076',
  },
  mapButton: {
    marginLeft: 20,
    flexShrink: 1,
  },
  quickAccessSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  safetyUpdates: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
  },
  safetyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffcc00',
  },
  safetyMessage: {
    fontSize: 16,
    color: '#687076',
  },
});
