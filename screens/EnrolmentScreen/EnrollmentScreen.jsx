import { ScrollView, Text, View } from "react-native";
import React, { Component, useState } from "react";
import EnrolledCardView from "../../components/EnrolledCardView/EnrolledCardView";
import AllEnrollments from "./AllEnrollments";
import EnrolledCourseView from "./EnrolledCourseView";

// export class EnrollmentScreen extends Component {
const EnrollmentScreen = () => {

  const [currentView, setCurrentView] = useState("All Enrollments");
  const [courseId, setCourseId] = useState("INTE_22222")

  return (
    <View>
      {currentView === "All Enrollments" && <AllEnrollments setCurrentView = {setCurrentView} setCourseId={setCourseId}/>}
      {currentView === "Enrolled Course" && <EnrolledCourseView setCurrentView = {setCurrentView} courseId={courseId}/>}
    </View>
  );
};

export default EnrollmentScreen;
