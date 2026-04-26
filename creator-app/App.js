import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import SettingsScreen from './screens/SettingsScreen';

// Create navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Product Stack Navigator
 * Handles navigation between product list and detail
 */
function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1F4E79' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: 'Product List' }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: 'Product Detail' }}
      />
    </Stack.Navigator>
  );
}

/**
 * Main App with Bottom Tab Navigation
 */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Set tab icons
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'list-outline';
            } else if (route.name === 'Settings') {
              iconName = 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: '#1F4E79',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {/* Home Tab (contains Stack) */}
        <Tab.Screen
          name="Home"
          component={ProductStack}
          options={{ headerShown: false }}
        />

        {/* Settings Tab */}
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}