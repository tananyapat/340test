import React from 'react';
import { Text, View, StyleSheet,Image ,Button} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer, CommonActions } from '@react-navigation/native';



import Fruit from "../components/Fruit";
import Header from './Head'
import { color } from 'react-native-reanimated';


const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.newstext}>
        News
      </Text>
      <View style={styles.news}>

      </View>

      <Text style={styles.newstext}>
        Price Check
      </Text>
      <ScrollView style={styles.scrollView} horizontal={true}>

        <View style={styles.layout}>
          <Image 
              style={styles.fruit}
              source={require('../assets/image/fruit.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              ผลไม้
            </Text>
            <Text style={styles.textbut}>
              เช็คราคา
            </Text>
          </View>
          
        </View>

        <View style={styles.layout}>
          <Image 
              style={styles.seafood}
              source={require('../assets/image/seafood.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              อาหารทะเล
            </Text>
            <Text style={styles.textbut}>
              เช็คราคา
            </Text>
          </View>
          
        </View>

        <View style={styles.layout}>
          <Image 
              style={styles.meat}
              source={require('../assets/image/meat.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              เนื้อสัตว์
            </Text>
            <Text style={styles.textbut}>
              เช็คราคา
            </Text>
          </View>
          
        </View>

        <View style={styles.layout}>
          <Image 
              style={styles.oil}
              source={require('../assets/image/oil.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              น้ำมัน
            </Text>
            <Text style={styles.textbut}>
              เช็คราคา
            </Text>
          </View>
          
        </View>

        <View style={styles.layout}>
          <Image 
              style={styles.rice}
              source={require('../assets/image/rice.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              ข้าว
            </Text>
            <Text style={styles.textbut}>
              เช็คราคา
            </Text>
          </View>
          
        </View>

        <View style={styles.layout}>
          <Image 
              style={styles.vegetable}
              source={require('../assets/image/vegetable.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              ผัก
            </Text>
            <Text style={styles.textbut}>
              เช็คราคา
            </Text>
          </View>
          
        </View>
      
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },
  newstext : {
    color:'rgb(0,0,0)',
    marginLeft:10,
    fontSize:30,
    
  },
  news:{
    marginTop: 10,
    height:'45%',
    backgroundColor:'rgba(0,0,0,0.2)',
    borderRadius:25,
    marginHorizontal: 20,
  }
  ,
  scrollView: {
    height:'25%',
    marginBottom: 10,
    marginTop: 10,
    borderRadius:25,
    marginHorizontal: 20,
    backgroundColor:'rgba(0,0,0,0.2)',
    
  },
  topic: {
    color: 'black',
    fontSize: 40,
    paddingLeft: 20,
    paddingTop: 10,
    fontWeight: "bold",
  },
  textandbut:{
    marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
  }
  ,
  text:{
    textAlign:'center',
    color:'white',
    fontSize:30
  },
  textbut:{
    width:100,
    marginVertical:10,
    color:'black',
    fontSize:22,
    backgroundColor:'rgb(254,203,1)',
    borderRadius:10,
    textAlign:'center',
  }
  ,
  layout:{
    borderRadius:25,
    flexDirection:'row',
    alignItems:"center",
    paddingHorizontal:5,
    marginHorizontal:5,
    marginVertical:15,
    backgroundColor:'#1E3774',
  }
  ,
  seafood:{
    width:125,
    height:125,
    justifyContent:'center',
  }
  ,fruit:{
    width:150,
    height:100,
  }
  ,meat:{
    width:150,
    height:75,
  }
  ,
  oil:{
    width:125,
    height:125,
  },
  rice:{
    width:150,
    height:110,
  },
  vegetable:{
    width:150,
    height:100,
  }
})

export default Home;