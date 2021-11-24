import React, {Component} from "react";
import { StyleSheet, Text, View} from "react-native";

export default class App extends Component {  

  constructor(){ 
    super();  
      this.state = { 
      count: 0, 
      name: 'Muhammad Azri',
      address: 'Gombak',
    }  
  }
 
  updateCount(){ 
    this.setState({count: this.state.count+1}); //this.state.year = 2017; won’t work 
  } 
  updateAddress(){
    this.setState({address: 'Gombak'});
  }
 
  render() { 
    return ( 
      <View style={styles.container}> 
        <Text style={styles.header}>My Biodata</Text> 
        <Text style={styles.contents}>My name is: {this.state.name}</Text>  
        <Text style={styles.contents}>Address: {this.state.address}</Text>
        <Text style={styles.counter}onPress={() => this.updateCount()}> {this.state.count} </Text> 
        <Text style={styles.contents}onPress={() => this.setState({count: 0})}> Reset</Text>  
      </View> 
    );  
  } 
} 
   
const styles = StyleSheet.create({  
  container: { 
    flex: 1, 
    justifyContent: 'flex-start',  
    alignItems: 'center',  
    backgroundColor: '#F5FCFF', 
  },  
     
  header: { 
//Prepared By: Dr Azmi Hassan
    marginTop: 60, 
    fontSize: 30,  
    textAlign: 'center',  
    margin: 10,
    color: '#000000',
  }, 
     
  contents: { 
    textAlign: 'center',
    fontSize: 20,  
    color: '#333333',  
    marginBottom: 5, 
  },

  counter: {
    margin: 50,
    fontSize: 70,
    textAlign: 'center',
    marginBottom: 10,
    color: '#000000',
  }
})

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/*
 import React from 'react';

 import {
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   useColorScheme,
   View,
 } from 'react-native';
 
 
 export default class App extends Component{
   constructor(){
     super();
     this.state = {
       wordInput: '',
     }
   }
 
   updateWordInput(){
     this.setState({wordInput: this.state.wordInput})
   }
 
   splitCountWordInput(wordInput){
     var inputArray = wordInput.split;
     var vowelCount = 0, consonantCount = 0;
     for(var i=0;i< inputArray.length; i++){
       switch(inputArray[i]){
         case'A','E','I','O','U','a','e','i','o','u': vowelCount+=1;
         default:  consonantCount+=1;
       }
     }
   }
 
   render(){
     return(
       <View style={styles.container}>
         <table>
           <tr>
             <th><Text style={styles.header}>Word Analyzer 2000</Text></th>
             </tr>
           <tr>
             <td><Text style={styles.prompt}>Word Input</Text></td>
             <td><TextInput
               placeholder='Type Here'
               onChangeText={(text)=> this.updateWordInput({wordInput: text})}
               />
             </td>
           </tr>
           <tr>
             <td></td>
             <td><Button title='Analyze!' onPress={()=>{
               this.splitCountWordInput(wordInput);
             }
               
             }/>
             </td>
           </tr>
           
           
           </table>
         
       </View>
     )
   }
 }
 
 //export default App;
 