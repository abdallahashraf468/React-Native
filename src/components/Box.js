import React from 'react';
import { View ,Text} from 'react-native';

const Box = ({colorName,hexCode}) => {
    return (
       <View style={{fontSize:29, margin:5 , backgroundColor:hexCode}}>
        <Text style={{color:"white" , textAlign:"center",fontSize:21}}>{colorName} {hexCode} </Text>
       </View>
    );
}

export default Box;
