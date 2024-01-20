import { Image, SafeAreaView, Text, FlatList, Platform, ScrollView, View } from 'react-native';
import Box from './src/components/Box';
// import { SectionList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigations/root';
export default function App() {

  // const COLORS = [


  //   { colorName: 'colors ', hexCode: '#5808bc' },

  //   { colorName: 'colors ', hexCode: '#b3eb8a' },

  //   { colorName: 'colors ', hexCode: '#d33682' },

  //   { colorName: 'colors ', hexCode: '#2aa198' },

  // ]
  
  

  // const sections1=[
  //   {
  //     id:"0",
  //     title:"basic comps",
  //     data:[
  //       {id:"0",text:"Nemar",image:require("./assets/1.png") },
  //       {id:"1",text:"messi",image:require("./assets/2.png") },
  //       {id:"2",text:"surize" ,image:require("./assets/3.png") },
  //     ]
  //     },
  //     {
  //     id:"1",
  //     title:"Players",
  //     data:[
  //       {id:"3",text:"Salah",image:require("./assets/1.png")},
  //       {id:"4",text:"de Broin",image:require("./assets/2.png")},
        
  //     ]
  //   },
  //     {
  //     id:"2",
  //     title:"Abdullah",
  //     data:[
  //       {id:"3",text:"neni" ,image:require("./assets/3.png")},
  //       {id:"4",text:"tarek" ,image:require("./assets/1.png")},
        
  //     ]
  //   }
  //   ]


  return (

    <NavigationContainer>
  

       <Root></Root>
















    {/* <SafeAreaView style={{ marginTop: Platform.OS == "android" ? 80 : 0 }}> */}






       {/* <ScrollView horizontal showsHorizontalScrollIndicator={true}>

        <View style={{ flex: 1, flexDirection: 'row', alignItems: "center" }}>

          <Image style={{ height: 380, marginRight: 50, width: 250 }} source={require("./assets/1.png")}></Image>
          <Image style={{ height: 380, margin: 50, width: 250 }} source={require("./assets/2.png")}></Image>
          <Image style={{ height: 380, marginRight: 50, width: 250 }} source={{ uri: "https://images.pexels.com/photos/16961107/pexels-photo-16961107/free-photo-of-facade-of-modern-architecture-building-in-london.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" }}></Image>

        </View>


      </ScrollView>  */}




{/* 
      <ScrollView  showsHorizontalScrollIndicator={true}>
        <FlatList data={COLORS}
          renderItem={({item}) => <Box {...item}></Box>}
          ListHeaderComponent={<Text style={{ fontSize: 25 , textAlign:"center", fontWeight:"bold" }}>This Is My  Colors  </Text>}
          ListEmptyComponent={
            <Text> No Data</Text>
          }
        ></FlatList>


 <SectionList sections={sections1}
        
        renderSectionHeader={ ( {section}) => <Text style={{backgroundColor:"steelblue",marginTop:30,height:27}}> {section.title} </Text> }
        renderItem={({item}) =>
        
              <View style={{flexDirection:"row" , backgroundColor:""}}> 
                <Image style={{height:39 , width:39 , marginTop:19 , borderRadius:50}} source={item.image}></Image> 
               <Text style={{height:39  , marginTop:19 , fontSize:30 , marginLeft:17}}>{item.text}</Text>
             </View>} >

          </SectionList>

      </ScrollView> */}



    {/* </SafeAreaView> */}

</NavigationContainer>

  );
}

