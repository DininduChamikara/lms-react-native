import {
    Animated,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import { useRef, useState } from "react";
  import {
    BurgerMenuIcon,
    DashboardIcon,
    EnrollmentsIcon,
    GradeIcon,
    LogoutIcon,
    CloseButtonIcon,
  } from "../../lib/icons/icons";
import DashboardScreen from "../DashboardScreen/DashboardScreen";
import EnrollmentScreen from "../EnrolmentScreen/EnrollmentScreen";
import GradeScreen from "../GradeScreen/GradeScreen";
 

export default function MainMenu({setIsLogged, userType}) {
    const [currentTab, setCurrentTab] = useState("Dashboard");
    // to get the current status of menu
    const [showMenu, setShowMenu] = useState(false);
  
    // animated properties..
    const offsetValue = useRef(new Animated.Value(0)).current;
    // scale initially must be one
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ justifyContent: "flex-start", padding: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              marginTop: 100,
            }}
          >
            Dinindu Chamikara
          </Text>
  
          <Text
            style={{
              marginTop: 6,
              color: "white",
            }}
          >
            {userType}
          </Text>
  
          <View style={{ flexGrow: 1, marginTop: 50 }}>
            {
              // Tab bar buttons
            }
  
            {TabButton(currentTab, setCurrentTab, "Dashboard", "dashboard")}
            {TabButton(currentTab, setCurrentTab, "Enrollments", "enrollments")}
            {TabButton(currentTab, setCurrentTab, "Grades", "grades")}
          </View>
  
          <View>{TabButton(currentTab, setCurrentTab, "Log out", "logout", setIsLogged)}</View>
        </View>
  
        {
          //over lay view
        }
  
        <Animated.View
          style={{
            flexGrow: 1,
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 15,
            paddingVertical: 80,
            borderRadius: showMenu ? 15 : 0,
            // transforming view..
            transform: [{ scale: scaleValue }, { translateX: offsetValue }],
          }}
        >
          {
            // menu bar button
          }
  
          <Animated.View
            style={{
              transform: [
                {
                  translateY: closeButtonOffset,
                },
              ],
            }}
          >
            <TouchableOpacity
              onPress={() => {
                // do actions here
                // scalling the view
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
  
                Animated.timing(offsetValue, {
                  toValue: showMenu ? 0 : 220,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
  
                Animated.timing(closeButtonOffset, {
                  toValue: showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
  
                setShowMenu(!showMenu);
              }}
            >
              {showMenu ? CloseButtonIcon : BurgerMenuIcon}
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "black",
                  paddingTop: 20,
                }}
              >
                {currentTab}
              </Text>
            </TouchableOpacity>
            {currentTab === "Dashboard" && <DashboardScreen />}
            {currentTab === "Enrollments" && <EnrollmentScreen userType={userType} />}
            {currentTab === "Grades" && <GradeScreen />}
          </Animated.View>
        </Animated.View>
      </SafeAreaView>
    );
  }
  
  // for multiple buttons...
  const TabButton = (currentTab, setCurrentTab, title, iconId, setIsLogged) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (title === "Log out") {
            // Do staff
            setIsLogged(false)
          } else {
            setCurrentTab(title);
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
            backgroundColor: currentTab == title ? "white" : "orange",
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          {iconId === "dashboard" && DashboardIcon}
          {iconId === "enrollments" && EnrollmentsIcon}
          {iconId === "grades" && GradeIcon}
          {iconId === "logout" && LogoutIcon}
  
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              paddingLeft: 15,
              color: currentTab == title ? "#535901" : "white",
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#5359D1",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
  });
