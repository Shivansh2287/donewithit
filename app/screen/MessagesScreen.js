import React, { useState } from 'react';
import { FlatList,  StyleSheet, View} from 'react-native';
import ListItem from '../components/lists/ListItem';
import ListItemDeleleteAction from '../components/lists/ListItemDeleleteAction';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import Screen from '../components/Screen'


const initialMessage = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];


function MessagesScreen(props){

const [messages,setMessages]= useState(initialMessage)
const[refreshing,setRefreshing]= useState(false)


const handelDelete= message=>{
  setMessages(messages.filter(m=>m.id !== message.id))
}


    return (
        <Screen >
        <FlatList
        data={messages}
        keyExtractor={(message)=>message.id.toString()}
        renderItem={({item})=>(
            <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={()=>console.log("msg selected",item)}
            renderRightActions={()=>
            <ListItemDeleleteAction
            onPress={()=>handelDelete(item)}
            />}
            />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={()=>{
          setMessages([
                    {
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../assets/mosh.jpg"),
          },
          ])
        }}
        />
        </Screen>
    );
};

const styles = StyleSheet.create({
    
})

export default MessagesScreen;