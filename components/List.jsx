import React from 'react'
import { StyleSheet, View , FlatList, ActivityIndicator} from 'react-native';
import Country from './Country';
import LanguagesModal from './LanguagesModal';

import {useState,useEffect} from 'react'

function List() {
    const [countries , setContries] = useState([])
    const [isModal , setisModal] = useState(false)

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(res => setContries(res))
    }, [])

    const OnPressable = () =>{
        setisModal(true)
    }
    
    return (
        <>
        {countries ? 
            <View style={styles.FirstView}>
                <FlatList style={styles.renderView} 
                data={countries} 
                renderItem={({item}) =>
                <>
                <Country  
                item={item} 
                modal={isModal} 
                onPressable={() => OnPressable()}/>
                </>
                } 
                />
        </View>
        :
        <ActivityIndicator color='black' size='large'/>
     }
    </>
    )
}

const styles = StyleSheet.create({
    FirstView : {
        marginTop : 45
    },
    modal : {
        height : 200,
        width : 250,
        marginTop : 45,
    },
    buttonModal : {
        width : 200,
        height : 150,
        backgroundColor : '#0000',
    },
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
  

export default List
