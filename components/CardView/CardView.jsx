import { Text, View } from "react-native";
import React, { Component, useState } from "react";
import { Switch } from "react-native";

const CardView = ({title}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: "orange",
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Text style={{paddingVertical:5}}>{title}</Text>
        <View style={{display:'flex', flexDirection:'row', height:30, alignItems:'center', justifyContent:'flex-end', width:'100%'}}>
          <Text
          style={{fontWeight:'bold'}}
          >Enroll</Text>
          <Switch
            style={{justifyContent:'flex-end'}}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};

export default CardView;
