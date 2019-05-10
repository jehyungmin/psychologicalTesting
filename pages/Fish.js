import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Image } from 'react-native';
import Styles from '../styles/Styles';

export default class Eagle extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>물고기</Text>

                    <Image source={require('../assets/Fish.png')}
                        resizeMode={'contain'}
                        style={Styles.imageStyle}
                    />

                    <Text></Text>
                </Content>
            </Container>
        );
    }
}