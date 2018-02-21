//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Icon} from 'native-base'
import CardComponents from '../CardComponents'


// create a component
class HomeTab extends Component {

static navigationOptions={

    tabBarIcon: ({tintColor}) => (
<Icon name ="ios-home" style = {{color: tintColor}} />
    )
}

    render() {
        return (
            <Container style ={styles.container}>
                <Content>
                <CardComponents imageSource = "1" likes = "500"  about = "The Joker is a fictional character who appears as the main antagonist in Christopher Nolan's 2008 superhero film The Dark Knight. Based upon the DC Comics character of the same name, he was played by Australian actor Heath Ledger."/>
                 <CardComponents imageSource = "3" likes = "200" about = "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."/>
                <CardComponents imageSource = "2" likes = "100" about = "The Jungle Book is a 2016 American fantasy adventure film, directed and co-produced by Jon Favreau, produced by Walt Disney Pictures, and written by Justin Marks. Based on Rudyard Kipling's eponymous collective works and inspired by Walt Disney's 1967 animated film of the same name, The Jungle Book is a live-action/CGI film that tells the story of Mowgli, an orphaned human boy who, guided by his animal guardians, sets out on a journey of self-discovery while evading the threatening Shere Khan."/>
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2e2e2',
    },
});

//make this component available to the app
export default HomeTab;
