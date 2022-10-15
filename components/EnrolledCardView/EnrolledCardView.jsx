import { Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";

// export class EnrolledCardView extends Component {
const EnrolledCardView = ({ title, setCurrentView, setCourseId, courseId }) => {
  return (
    <TouchableOpacity onPress={() => {
      setCurrentView("Enrolled Course")
      setCourseId(courseId)
    }}>
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
        <Text style={{ paddingVertical: 5 }}>{title}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 10,
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EnrolledCardView;
