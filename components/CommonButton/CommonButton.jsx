import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

const CommonButton = ({ title, icon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 13,
        paddingRight: 35,
        backgroundColor: "#5359D1",
        borderRadius: 8,
        width: 170,
      }}
    >
      {icon}

      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          paddingLeft: 15,
          color: "white",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CommonButton;
