import { useState } from "react";
import { View } from "react-native";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import MainMenu from "./screens/MainMenu/MainMenu";

export default function App() {

  const [userType, setUserType] = useState("student");
  const [isLogged, setIsLogged] = useState(false);

  return(
    <>
      {!isLogged && <LoginScreen setIsLogged = {setIsLogged} setUserType = {setUserType}/>}
      {isLogged && <MainMenu setIsLogged = {setIsLogged} userType = {userType}/>}
    </>
  )
}

