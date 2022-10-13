import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CardView from '../../components/CardView/CardView'

export class EnrollmentScreen extends Component {
  render() {
    return (
      <View>
        <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#5359D1",
          paddingTop:20,
          paddingBottom: 0,
        }}
      >
        Enrolled Courses
      </Text>
        <CardView title={"INTE 22232 - Web Application Development"}/>      
        <CardView title={"INTE 22232 - Web Application Development"}/>      
        <CardView title={"INTE 22232 - Web Application Development"}/>      
        <CardView title={"INTE 22232 - Web Application Development"}/>     
        <CardView title={"INTE 22232 - Web Application Development"}/>     
        <CardView title={"INTE 22232 - Web Application Development"}/>     
        <CardView title={"INTE 22232 - Web Application Development"}/>     
        <CardView title={"INTE 22232 - Web Application Development"}/>     
        <CardView title={"INTE 22232 - Web Application Development"}/>     
        <CardView title={"INTE 22232 - Web Application Development"}/>     
        <CardView title={"INTE 22232 - Web Application Development"}/>     
      </View>
    )
  }
}

export default EnrollmentScreen