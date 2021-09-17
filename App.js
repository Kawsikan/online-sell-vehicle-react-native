import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListVehcile from './components/Home/ListVehcile';
import ListBikes from './components/Home/ListBikes';
import ListParts from "./components/Home/ListParts";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import TabBar from './components/TabBar/TabBar';
import menu from "./assets/icons/menu.png"
import { Image, TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Button title="Open drawer" onPress={() => navigation.openDrawer()} /> */}
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
            >
                <Image
                    source={menu}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25
                    }}
                />
            </TouchableOpacity>
            {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications Screen</Text>
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    );
}
function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Notifications" component={Notifications} />
            <Drawer.Screen name="Home" component={MyTab} />
        </Drawer.Navigator>
    );
}
function MyTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Vehicle" component={ListVehcile} />
            <Tab.Screen name="Bikes" component={ListBikes} />
            <Tab.Screen name="Parts" component={ListParts} />
        </Tab.Navigator>
    );
}
const App = () => {

    return (
        <NavigationContainer>
            <TabBar />
            <MyDrawer />
        </NavigationContainer>
    )
}

export default App