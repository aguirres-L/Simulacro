import React, { useState } from "react";
import { View,Text,Image,ImageBackground, TouchableOpacity ,StyleSheet} from "react-native";


const SimulacroOne =()=>{
//_______________________________________________________________________
    const urlCat = 'https://api.thecatapi.com/v1/images/search'

   const [imgUrlCats,setUrl]= useState("")

   const callImgCat =async()=>{
        const resp = await fetch(urlCat)
        const date = await resp.json()

        const catUrl = date[0]?.url
        setUrl(catUrl)
    //fetch(urlCat).then(resp=>resp.json()).then(date =>setUrl(date[0]?.url))
}
//_______________________________________________________________________

//_______________________________________________________________________

const urlFact = 'https://catfact.ninja/fact'


const [factUrl,setFact]= useState("")

const callFact=async()=>{

    const rep = await fetch(urlFact)
    const date = await rep.json()

    const dataFact = date.fact
    
    setFact(dataFact)

}









//_______________________________________________________________________





return(


    <View>

    <View>
    <TouchableOpacity
        style={style.btn}
        onPress={()=>callImgCat()}
        
   >
     <Text style={style.hola}>
     New Cats 
    </Text>

   </TouchableOpacity>
    <Image
    style={style.img}
        source={{uri:imgUrlCats}}
    />
    </View>

        <View style={style.fact}>
            
            <TouchableOpacity
            onPress={()=>callFact()}
            >
                <Text>
                    fact
                </Text>
            </TouchableOpacity>

        </View>
        
            <Text style={style.textos}>Priemras 3 Palabras : " {factUrl} "</Text>

           


     </View>



)




}



const style =StyleSheet.create({

    hola:{
        alignSelf:'center',
        marginTop:2,
        marginBottom:5,
        color:'white'
    },
    img:{
        alignSelf:'center',
        borderRadius:500,
        borderWidth:3,
        borderColor:'red',
        width:200,
        height:200,
       
        
    },
    btn:{
          backgroundColor:'red',
          padding:10,
          alignSelf:'center',
          borderRadius:50,
          marginBottom:5,
          marginTop:19
    },
    fact:{
        height:40,
        width:50,
       marginTop:100,
       alignSelf:'center',
        backgroundColor:'grey',
        padding:10,
        borderRadius:20
        },
    textos:{
        color:'red',
        alignSelf:'center',
        marginTop:5
        
    }
})


export default SimulacroOne;




