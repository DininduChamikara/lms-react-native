import { Text, View } from "react-native";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";

const NotificationCard = ({ lecturerName }) => {
  return (
    <View
      style={{
        backgroundColor: "#5359D1",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            fontStyle: "italic",
            marginVertical: 0,
            color: "yellow",
          }}
        >
          Subject Name
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            fontStyle: "italic",
            marginVertical: 5,
            color: "white",
          }}
        >
          Announcement title
        </Text>
        <Text style={{ fontSize: 15, marginVertical: 5, color: "white" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type s pecimen book.
        </Text>
        <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <View
            style={{
              display: "flex",
              width: "50%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                marginVertical: 5,
                color: "yellow",
              }}
            >
              15/10/2022
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
            <TouchableOpacity
              style={{
                marginVertical: 5,
                width: "50%",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "yellow",
                }}
              >
                {lecturerName}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
