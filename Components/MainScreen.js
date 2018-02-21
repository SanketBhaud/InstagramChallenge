//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base'
import {TabNavigator} from 'react-navigation'
import HomeTab from './AppTabsNavigator/HomeTab'
import LikesTab from './AppTabsNavigator/LikesTab'
import ProfileTab from './AppTabsNavigator/ProfileTab'
import SearchTab from './AppTabsNavigator/SearchTab'
import AddMediaTab from './AppTabsNavigator/AddMediaTab'

// create a component
class MainScreen extends Component {

static navigationOptions = {
    headerLeft: <Icon name='ios-camera-outline'  style={{paddingLeft: 10}} />,
    title: "Instagram App",
    headerRight: <Icon name='ios-send-outline' style={{paddingRight: 10}} />
}

    render() {
        return (
           <AppTabNavigator />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default MainScreen;

const AppTabNavigator = TabNavigator({
    HomeTab:{
        screen: HomeTab
    },
    SearchTab:{
        screen: SearchTab
    },
    AddMediaTab:{
        screen: AddMediaTab
    },
    LikesTab:{
        screen: LikesTab
    },
    ProfileTab:{
        screen: ProfileTab
    }
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }

})
