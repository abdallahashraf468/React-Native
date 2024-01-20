import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {View, StyleSheet} from 'react-native';
import Home from '../screens/Home';
import Users from '../screens/Users';
import Details from '../screens/Details';
import routes from '../../common/routes';

const Mystack = createNativeStackNavigator();

const Root = () => {
    return (

        <Mystack.Navigator>

     <Mystack.Screen name={routes.home} component={Home} options={{headerTitle:"Home Page",headerStyle:{backgroundColor:"#bae1ff"},headerTintColor:"white",headerTitleStyle:{fontSize:32},headerTitleAlign:"center"}}></Mystack.Screen>
     <Mystack.Screen name={routes.users} component={Users} options={{headerTitle:"Users Page",headerStyle:{backgroundColor:"#bae1ff"},headerTintColor:"white",headerTitleStyle:{fontSize:32},headerTitleAlign:"center"}}></Mystack.Screen>
     <Mystack.Screen name={routes.details} component={Details} options={{headerTitle:"Details Page",headerStyle:{backgroundColor:"#bae1ff"},headerTintColor:"white",headerTitleStyle:{fontSize:32},headerTitleAlign:"center"}}></Mystack.Screen>
     
     </Mystack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Root;
