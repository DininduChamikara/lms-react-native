import { Text, View } from "react-native";
import React, { Component } from "react";
import CourseEvoluvationCard from "../../components/CourseEvoluvationCard/CourseEvoluvationCard";
import { ScrollView } from "react-native";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";

const StudentCourseView = () => {
  return (
    <View>
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
};

export default StudentCourseView;
