import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Image } from 'react-native';
import Styles from '../styles/Styles';

export default class Eagle extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>코끼리</Text>

                    <Image source={require('../assets/Elephant.png')}
                        resizeMode={'contain'}
                        style={Styles.imageStyle}
                    />

                    <Text>코끼리를 고른 당신은 한 가지 일을 파고들기 시작하면 절대로 포기하지 않는 유형이다.</Text>
                    <Text>타인을 대할 때에도 항상 온정을 베풀기 위해 노력하며 어떠한 고난이 있어도 쉽게 뜻을 꺾으려 하지 않는다.</Text>
                </Content>
            </Container>
        );
    }
}