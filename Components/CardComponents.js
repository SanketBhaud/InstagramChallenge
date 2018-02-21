//import liraries
import React, { Component } from 'react';
import { StyleSheet, Text, View , Platform, Image } from "react-native"
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

// create a component
class CardComponents extends Component {


    render() {

        const images = {
            "1": require('../Components/assets/images/Joker.jpg'),
            "2": require('../Components/assets/images/JungleBook.jpg'),
            "3": require('../Components/assets/images/Avenger.png')
    }


    return (
        <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../Components/assets/images/me.jpg')} />
                        <Body>
                            <Text>Sanket Bhaud </Text>
                            <Text note>Feb 20, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>

                    </Left>
                </CardItem>

                <CardItem style={{ height: 20 }}>
                    <Text>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>Sanket Bhaud : </Text>
                            {this.props.about}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
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
export default CardComponents;
