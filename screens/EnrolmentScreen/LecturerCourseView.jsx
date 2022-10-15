import { Modal, ScrollView, Text, View } from "react-native";
import React, { Component, useState } from "react";
import CommonButton from "../../components/CommonButton/CommonButton";
import {
  AddIcon,
  CloseButtonIcon,
  DescriptionIcon,
  ProfileIcon,
  SendIcon,
  SmallCloseButtonIcon,
  TitleIcon,
} from "../../lib/icons/icons";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";

const LecturerCourseView = () => {
  const [descriptionText, onChangeDescriptionText] = useState("");
  const [titleText, onChangeTitleText] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
        Announcements
      </Text>
      <TouchableOpacity
        onPress={() => {
          setOpenModal(true);
        }}
      >
        <CommonButton title={"Create New"} icon={AddIcon} />
      </TouchableOpacity>

      <ScrollView style={{ marginTop: 10, height: "66%" }}>
        <AnnouncementCard actionText={"Delete"} />
        <AnnouncementCard actionText={"Delete"} />
        <AnnouncementCard actionText={"Delete"} />
      </ScrollView>

      <Modal visible={openModal} transparent={true}>
        <View
          style={{
            backgroundColor: "white",
            margin: 50,
            marginTop: 150,
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              padding: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "80%" }}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginVertical: 5 }}
              >
                Create Announcement
              </Text>
            </View>
            <View
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setOpenModal(false);
                }}
              >
                {SmallCloseButtonIcon}
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "90%",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "#5359D1",
              paddingHorizontal: 20,
              marginBottom: 0,
            }}
          >
            {TitleIcon}
            <TextInput
              style={styles.input}
              maxLength={80}
              onChangeText={onChangeTitleText}
              value={titleText}
              placeholder={"Title"}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "85%",
              marginBottom: 5,
            }}
          >
            <Text>{titleText.length}</Text>
            <Text>/80</Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "90%",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "#5359D1",
              paddingHorizontal: 20,
              marginBottom: 0,
            }}
          >
            {DescriptionIcon}
            <TextInput
              multiline
              numberOfLines={4}
              maxLength={200}
              style={styles.multilineInput}
              onChangeText={onChangeDescriptionText}
              value={descriptionText}
              placeholder={"Description"}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "85%",
              marginBottom: 5,
            }}
          >
            <Text>{descriptionText.length}</Text>
            <Text>/200</Text>
          </View>
          <View style={{ marginTop: 15, marginBottom: 35 }}>
            <TouchableOpacity>
              <CommonButton title={"Send Now..."} icon={SendIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 6,
    padding: 5,
    color: "#5359D1",
    fontSize: 20,
  },
  multilineInput: {
    height: 120,
    margin: 6,
    padding: 5,
    color: "#5359D1",
    fontSize: 20,
  },
});

export default LecturerCourseView;
