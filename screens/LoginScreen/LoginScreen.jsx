import { Text, View } from "react-native";
import React, { Component } from "react";
import ProfileImg from "../../images/profile_img.png";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { LockIcon, ProfileIcon } from "../../lib/icons/icons";
import { TouchableOpacity } from "react-native";

const LoginScreen = ({setIsLogged, setUserType}) => {
  const [usernameText, onChangeUsernameText] = React.useState("");
  const [passwordText, onChangePasswordText] = React.useState("");

  return (
    <View
      style={{ width: "100%", height: "100%", padding: 20, paddingTop: 50 }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "orange",
          borderRadius: 20,
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: "bold", fontStyle:'italic', color: "#5359D1" }}>
          LMS
        </Text>
        <Text style={{ fontSize: 20, fontStyle:'italic', fontWeight:'bold' }}>
          Learning Management System
        </Text>
        
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 50,
          }}
        >
          <Image
            style={{ width: 130, height: 130, resizeMode: "stretch" }}
            source={ProfileImg}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "#5359D1",
              paddingHorizontal: 20,
              marginBottom: 10,
            }}
          >
            {ProfileIcon}
            <TextInput
              style={styles.input}
              onChangeText={onChangeUsernameText}
              value={usernameText}
              placeholder={"Username"}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "#5359D1",
              paddingHorizontal: 20,
              marginBottom: 10,
            }}
          >
            {LockIcon}
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={onChangePasswordText}
              value={passwordText}
              placeholder={"Password"}
            />
          </View>

          <Text>{passwordText}</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
                onPress={() => {
                    if(usernameText === "Std" && passwordText === "123"){
                        setIsLogged(true)
                        setUserType("Student")
                    }
                    if(usernameText === "Lec" && passwordText === "123"){
                        setIsLogged(true)
                        setUserType("Lecturer")
                    }
                }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 8,
                  paddingLeft: 13,
                  paddingRight: 35,
                  backgroundColor: "#5359D1",
                  borderRadius: 8,
                  marginTop: 15,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    margin: 6,
    padding: 5,
    color: "#5359D1",
    fontSize: 20,
  },
});

export default LoginScreen;
