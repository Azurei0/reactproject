import React, {Component, useRef} from "react";
import { Button, FlatList, StyleSheet, Text, View} from "react-native";

const productList = [];
for(i=0; i<70; i++){
  productList.push({name: 'List Product ' + (i+1), key: (i+1)});
}

export default class App extends Component {  

  render() { 
    

    console.log(productList);

    

    return ( 
      <View style={styles.container}>
        <Button title='Scroll to a Random Item!' onPress={() => {
          const randomIndex = Math.floor(Math.random() * productList.length);
          this.flatListRef.scrollToIndex({
            animated: true,
            index: randomIndex,
          });
        }}
        />
        <FlatList
          getItemLayout={(data, index) => ({
            length: productList.length,
            offset: productList.length * index,
            index,
          })}
          ref={(ref) => { this.flatListRef = ref; }}
          data={productList}
          renderItem={( {item} ) => <Text style={styles.item}>{item.name}</Text>}
        />
      </View>
    );  
  } 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 25,
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 1,
  },
})