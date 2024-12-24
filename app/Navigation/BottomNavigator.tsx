import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';  // For handling touch events
import { IconButton } from 'react-native-paper';  // For FAB Icon

// Import screens
import HomePage from '../(tabs)/HomePage';
import MapsPage from '../(tabs)/Maps';
import ContactsPage from '../(tabs)/ContactsPage'; // Make sure this is a valid component
import MoreTabPlaceholder from './MoreTabPlaceholder'; // Ensure this is a valid component
import UploadImagePage from '../(tabs)/UploadImagePage';
// Initialize Tab Navigator
const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: 'home-outline',
  Maps: 'map-outline',
  Contacts: 'call-outline',
  More: 'ellipsis-horizontal-outline',
};

export default function BottomNavigator({ navigation }) {
  return (
    <React.Fragment>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName = tabIcons[route.name] || ''; // Dynamic icon mapping
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Maps" component={MapsPage} />
        <Tab.Screen name="Contacts" component={ContactsPage} />
        
        {/* The 'More' tab uses a listener to toggle the drawer */}
        <Tab.Screen
          name="More"
          component={MoreTabPlaceholder} // Ensure this is a valid component
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault(); // Prevent tab navigation
              navigation.toggleDrawer(); // Open the side drawer
            },
          })}
        />
      </Tab.Navigator>

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: [{ translateX: -30 }],
          backgroundColor: '#FF6347',
          borderRadius: 50,
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#fff',
        }}
        onPress={() => {
          // Navigate to Upload Image Page or open modal for uploading image
          navigation.navigate('UploadImagePage');
        }}
      >
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>
    </React.Fragment>
  );
}






