import React from "react";
import { SafeAreaView, Image,StyleSheet, TouchableOpacity, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const data = [
  {
    id:"id00001",
    name:"Details",
    iconName:"profile",
  },
  {
    id:"id00002",
    name:"Edit / Update",
    iconName:"user",
  },
  {
    id:"id00004",
    name:"Change Password",
    iconName:"lock",
  },
  {
    id:"id00004",
    name:"Payment History",
    iconName:"back",
  },
  {
    id:"id00005",
    name:"Log Out",
    iconName:"logout",
  },
]
const ProfilePage = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    <Text style={styles.title}>ACCOUNT INFOMATION</Text>
    <View style={styles.profile_top}>
      <Text style={styles.name}>Nguyen Anh</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://www.bhdstar.vn/wp-content/uploads/2017/09/STAR.png',
        }}
      />
    </View>
    <View style={styles.profile_bottom}>
      {
        data.map(val =>{
          return (
            <TouchableOpacity style={styles.items}>
            <View style={styles.items_left}>
              <AntDesign style={styles.text_iconright} name={val?.iconName} size={16} />
              <Text style={styles.text_right}>{val?.name}</Text>
            </View>
            <AntDesign style={styles.text_right} name="right" size={16} />
          </TouchableOpacity>
          )
        })
      }
    </View>

    

    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor:"black"
  },
  title:{
    fontSize:20,
    paddingLeft:20,
    color:"white",
    textTransform:"capitalize"
  },
  profile_top : {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    position:"relative"
   // backgroundColor:"red"
  },
  profile_bottom : {
    flex:1
  },
  items : {
    borderTopColor:"white",
    borderTopWidth:0.5,
    paddingTop:20,
    paddingBottom:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingRight:20,
    paddingLeft:12
  },
  items_left:{
    flexDirection:"row",
    alignItems:"center"
  },
  items_right:{

  },
  text_right :{
    color:"white",
    marginLeft:14,
    fontSize:14
  },
  text_iconright:{
    color:"#E8D5C4",
    marginLeft:8,
    fontSize:16
  },
  tinyLogo: {
    width: "90%",
    height: "60%",
    borderRadius:8,
    resizeMode: 'cover'
  },
  name : {
    color:"white",
    position:"absolute",
    zIndex:100,
    fontWeight:"500",
    bottom:90,
    left:40
  }
});
export default ProfilePage;
