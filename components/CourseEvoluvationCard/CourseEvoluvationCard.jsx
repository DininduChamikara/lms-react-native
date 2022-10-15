import { Text, View } from "react-native";
import React, { Component } from "react";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

const CourseEvoluvationCard = () => {
  return (
    <View style={{ backgroundColor: "#5359D1", borderRadius: 5, padding: 10, marginBottom:10 }}>
      <View
        style={{ display: "flex", flexDirection: "row", marginVertical: 10 }}
      >
        <View
          style={{
            display: "flex",
            width: "50%",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}>
            Grade :{" "}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}>
            A+
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            width: "50%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ fontSize: 18, color: "orange" }}>Marks : </Text>
          <Text style={{ fontSize: 18, color: "orange" }}>86</Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            fontStyle: "italic",
            marginVertical: 5,
            color: "white",
          }}
        >
        Lecturer Review {<MaterialIcons name="star-rate" size={18} color="white" />}
        </Text>
        <Text style={{ fontSize: 15, marginVertical: 5, color: "white" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type s pecimen book.
        </Text>
      </View>
    </View>
  );
};

export default CourseEvoluvationCard;
