
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import routes from '../../common/routes';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
const Users = () => {  
    
    const [users , setUsers] = useState([])
    const {navigate} = useNavigation();


    useEffect(() => {

        //  fetch('https://jsonplaceholder.typicode.com/users').then((data) =>
        // data.json()).then((dataR) => setUsers(dataR));

        axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>setUsers(res.data))
     
    } ,[])


    return (

        <View style={{marginTop:37}}>

            {users.map(user => <View style={{ display:"flex" , flexDirection:"row" ,justifyContent:"space-around"}}>
             <Text style={{marginTop:17 , fontSize:18}} key={user.id}>{user.name}</Text>
             <AntDesign style={{marginTop:17 }} name="rightcircle" size={29} color="#6082b6" onPress={() => navigate(routes.details,user)}/> 

             </View>)}
            
        </View>
    );
}

 const styles = StyleSheet.create({})

export default Users;
