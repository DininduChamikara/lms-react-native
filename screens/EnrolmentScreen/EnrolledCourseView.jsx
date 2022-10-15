import { ScrollView, Text, View } from "react-native";
import React, { Component, useState } from "react";
import CourseEvoluvationCard from "../../components/CourseEvoluvationCard/CourseEvoluvationCard";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";

function EnrolledCourseView({ courseId }) {
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
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
        Evoluvation & Grades
      </Text>
      <CourseEvoluvationCard />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
        Announcements
      </Text>
      <ScrollView style={{ marginVertical: 0, height: "33%" }}>
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
      </ScrollView>
    </View>
  );
}

export default EnrolledCourseView;
