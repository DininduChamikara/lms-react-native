import { Text, View } from 'react-native'
import React, { Component } from 'react'
import NotificationCard from '../../components/NotificationCard/NotificationCard'
import { ScrollView } from 'react-native'

export class NotificationScreen extends Component {
  render() {
    return (
      <ScrollView style={{marginVertical:10, height:"95%"}}>
        <NotificationCard lecturerName={"Shantha Jayalal"}/>
        <NotificationCard lecturerName={"Shantha Jayalal"}/>
        <NotificationCard lecturerName={"Shantha Jayalal"}/>
        <NotificationCard lecturerName={"Shantha Jayalal"}/>
        <NotificationCard lecturerName={"Shantha Jayalal"}/>
        <NotificationCard lecturerName={"Shantha Jayalal"}/>
      </ScrollView>
    )
  }
}

export default NotificationScreen