import {View, Text,StyleSheet , Image} from 'react-native';
import { useRoute } from '@react-navigation/native';

const Details = () => {

const {params} =  useRoute()
  console.warn(params)

  return (
    
    <View style={{display:"flex" , flexDirection:"column", alignItems:"center",marginTop:80, justifyContent:"center"}}>
          <Text>Wellcome : {params.name}</Text>
          {/* <Image source={params.image} style={{width:70,height:79 }}></Image> */}
          <Text>My Email : {params.email}</Text>
          <Text>Phone Number : {params.phone}</Text>
          <Text>Address City : {params.address.city}</Text>
          <Text>Company Name : {params.company.name}</Text>

    </View>
  );
}

const styles = StyleSheet.create({})

export default Details;
