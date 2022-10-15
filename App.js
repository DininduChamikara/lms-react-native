import { useState } from "react";
import { View } from "react-native";
import MainMenu from "./screens/MainMenu/MainMenu";

export default function App() {

  const [userType, setUserType] = useState("student");
  const [isLogged, setIsLogged] = useState(true);

  return(
    isLogged && <MainMenu/>
  )
}

