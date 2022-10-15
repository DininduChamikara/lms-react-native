import { View, Text } from "react-native";
import React, { Component } from "react";
import { ScrollView } from "react-native";
import CourseCardView from "../../components/CourseCardView/CourseCardView";

export class DashboardScreen extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#5359D1",
            paddingTop: 20,
            paddingBottom: 0,
          }}
        >
          All Courses
        </Text>
        <ScrollView style={{ marginVertical: 15, height:'80%' }}>
          <CourseCardView title={"INTE 22232 - Web Application Development"} />
          <CourseCardView title={"INTE 22232 - Web Application Development"} />
          <CourseCardView title={"INTE 22232 - Web Application Development"} />
          <CourseCardView title={"INTE 22232 - Web Application Development"} />
          <CourseCardView title={"INTE 22232 - Web Application Development"} />
          <CourseCardView title={"INTE 22232 - Web Application Development"} />
          <CourseCardView title={"INTE 22232 - Web Application Development"} />
          <CourseCardView title={"INTE 22232 - Web Application Development"} />
        
        </ScrollView>
      </View>
    );
  }
}

export default DashboardScreen;
