import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Image } from 'react-native';
import Styles from '../styles/Styles';

export default class Eagle extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>제형민</Text>

                    <Image source={require('../assets/JeHyungMin.png')}
                        resizeMode={'contain'}
                        style={{ width: 400, height: 700 }}
                    />

                    <Text>ㅋㅋㅋㅋㅋ만든사람ㅋㅋㅋㅋ</Text>
                </Content>
            </Container>
        );
    }
}