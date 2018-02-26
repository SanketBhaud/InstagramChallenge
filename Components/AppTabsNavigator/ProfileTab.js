//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Content, Icon, Header, Left, Body, Right, Segment, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo';


// create a component
class ProfileTab extends Component {

    static navigationOptions={

        tabBarIcon: ({tintColor}) => (
    <Icon name ="person" style = {{color: tintColor}} />
        )
    }

    render() {
        return (
           <Container style={{flex:1,backgroundColor:'white'}}>

                <Header style={{ paddingLeft: 10, paddingLeft: 10 }}>
                    <Left>
                        <Icon name="md-person-add" />
                    </Left>
                    <Body><Text>Sanket Bhaud</Text></Body>
                    <Right>
                        <EntypoIcon name="back-in-time" style={{ fontSize: 32 }} />
                    </Right>
                </Header>

                <Content>

                        <View style={{ flexDirection: 'row' }}>
                            <View
                                style={{ flex: 1, justifyContent: 'flex-start' }}>
                                <Image source={require('../assets/images/me.jpg')}
                                    style={{ width: 75, height: 75, borderRadius: 37.5 }} />

                            </View>

                                 <View style={{ flex: 3 }}>

                                    {/** Stats **/}
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-around',
                                            alignItems: 'flex-end'
                                        }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text>20</Text>
                                            <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text>205</Text>
                                            <Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text>167</Text>
                                            <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
                                        </View>
                                    </View>


                            </View>
                    </Content>
               </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
});

//make this component available to the app
export default ProfileTab;
