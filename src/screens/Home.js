import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';
import routes from '../../common/routes';

const Home = () => {
    const {navigate} = useNavigation();
    return (
        <View>
            <Button title='go to User Page' onPress={() => navigate(routes.users)}>Home</Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
