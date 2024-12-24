import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function AboutUsPage() {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} 
        style={styles.logo}
      />
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.paragraph}>
        Welcome to Haven! We are committed to providing a platform that ensures your safety and well-being in any situation. Our mission is to empower individuals with tools to stay connected and secure, whether you're at home, traveling, or exploring new places.
      </Text>
      <Text style={styles.subheading}>Our Vision</Text>
      <Text style={styles.paragraph}>
        At Haven, our vision is to create a world where everyone feels safe and connected, no matter where they are. By leveraging advanced technology and community-driven insights, we aim to redefine personal safety standards.
      </Text>
      <Text style={styles.subheading}>Our Values</Text>
      <Text style={styles.paragraph}>
        - **Empathy:** Understanding the needs and concerns of our users.{"\n"}
        - **Innovation:** Continuously improving through cutting-edge technology.{"\n"}
        - **Integrity:** Upholding trust and privacy above all else.{"\n"}
        - **Collaboration:** Building a community of support and care.
      </Text>
      <Text style={styles.subheading}>Our Team</Text>
      <Text style={styles.paragraph}>
        Our dedicated team of developers, designers, and safety experts work tirelessly to bring you the best possible experience. Together, we are committed to making Haven a reliable companion for all your safety needs.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 75,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#007BFF',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
});
