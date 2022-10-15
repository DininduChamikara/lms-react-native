import { Text, View } from "react-native";
import React, { Component } from "react";
import { ScrollView } from "react-native";
import EnrolledCardView from "../../components/EnrolledCardView/EnrolledCardView";

const AllEnrollments = ({setCurrentView, setCourseId}) => {
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
        Enrolled Courses
      </Text>
      <ScrollView style={{ marginVertical: 15, height: "80%" }}>
        <EnrolledCardView title={"INTE 22232 - Web Application Development"} setCurrentView = {setCurrentView} setCourseId = {setCourseId} courseId={"INTE 22232"}/>
        <EnrolledCardView title={"INTE 22232 - Web Application Development"} setCurrentView = {setCurrentView} setCourseId = {setCourseId} courseId={"INTE 22233"}/>
        <EnrolledCardView title={"INTE 22232 - Web Application Development"} setCurrentView = {setCurrentView} setCourseId = {setCourseId} courseId={"INTE 22234"}/>
        <EnrolledCardView title={"INTE 22232 - Web Application Development"} setCurrentView = {setCurrentView} setCourseId = {setCourseId} courseId={"INTE 22232"}/>
        <EnrolledCardView title={"INTE 22232 - Web Application Development"} setCurrentView = {setCurrentView} setCourseId = {setCourseId} courseId={"INTE 22232"}/>
        <EnrolledCardView title={"INTE 22232 - Web Application Development"} setCurrentView = {setCurrentView} setCourseId = {setCourseId} courseId={"INTE 22232"}/>
        <EnrolledCardView title={"INTE 22232 - Web Application Development"} setCurrentView = {setCurrentView} setCourseId = {setCourseId} courseId={"INTE 22232"}/>
   
      </ScrollView>
    </View>
  );
};

export default AllEnrollments;
