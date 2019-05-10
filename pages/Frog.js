import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Image } from 'react-native';
import Styles from '../styles/Styles';

export default class Eagle extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>개구리</Text>

                    <Image source={require('../assets/Frog.png')}
                        resizeMode={'contain'}
                        style={Styles.imageStyle}
                    />

                    <Text>개구리를 고른 당신은 자신의 견해와 행동 방식을 무엇보다 옳다고 생각하고 있으며, 때로는 다른 사람들의 주장을 잘못된 것으로 받아들인다.</Text>
                    <Text>사회적인 관계에서 항상 문제가 생길 수 있어 매사를 잘  대처해야 하는 타입니다.</Text>
                </Content>
            </Container>
        );
    }
}