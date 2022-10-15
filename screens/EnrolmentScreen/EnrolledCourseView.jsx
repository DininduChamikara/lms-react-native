import { ScrollView, Text, View } from "react-native";
import React, { Component, useState } from "react";
import StudentCourseView from "./StudentCourseView";
import LecturerCourseView from "./LecturerCourseView";

function EnrolledCourseView({ courseId, userType }) {
  const [courseName, setCourseName] = useState("Web Application Development");

  // course name should retrive from the database

  return (
    <View>
      <View
        style={{ marginVertical: 10, backgroundColor: "orange", padding: 10 }}
      >
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            color: "#535901",
            fontWeight: "bold",
          }}
        >
          {courseId}
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {courseName}
        </Text>
      </View>

      {userType === "Student" && <StudentCourseView/> }
      {userType === "Lecturer" && <LecturerCourseView/> }

    </View>
  );
}

export default EnrolledCourseView;
