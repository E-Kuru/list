import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';

const Country = ({ item, onPressable}) => {
  
    return (
        <>
            <Pressable onLongPress={() => onPressable()}>
                    <View style={styles.renderItem}>
                        <Text style={styles.renderView}>{item.name}</Text>
                        <Text style={styles.renderView}>{item.region}</Text>
                        <Text style={styles.renderView}>{item.capital}</Text>
                    </View>
            </Pressable>
        </>
    )
}


const styles = StyleSheet.create({
    renderItem: {
        borderColor : '#cccc',
        borderWidth : 2,
        borderStyle : 'solid',
        width : 300,
        marginVertical : 10,
    },
    renderView : {
        color : 'black'
    }
  });

export default Country
