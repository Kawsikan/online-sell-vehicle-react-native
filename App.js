import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListVehcile from './components/Home/ListVehcile';
import ListBikes from './components/Home/ListBikes';
import ListParts from "./components/Home/ListParts";

const Tab = createBottomTabNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Vehicle" component={ListVehcile} />
                <Tab.Screen name="Bikes" component={ListBikes} />
                <Tab.Screen name="Parts" component={ListParts} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App