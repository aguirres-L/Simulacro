

import React from "react";
import {View,Text} from "react-native"

const Prueba =()=>{

    const urlFats = 'https://catfact.ninja/fact'

    const Facts=()=>{
        fetch(urlFats).then(res=>res.json()).then(date => console.log(date.fact))
    }







    return(
        <View>
            <Text>
                hola
            </Text>
        </View>
    )
}

export default Prueba;