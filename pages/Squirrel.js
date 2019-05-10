import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Image } from 'react-native';
import Styles from '../styles/Styles';

export default class Eagle extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>다람쥐</Text>

                    <Image source={require('../assets/Squirrel.png')}
                        resizeMode={'contain'}
                        style={Styles.imageStyle}
                    />

                    <Text>다람쥐를 고른 당신은 타인의 사고를 통제하고 설득하는 데 매우 능숙한 편이다.</Text>
                    <Text>자신에게 이득이 되는 사람들과 관계망을 잘 형성하고 있으며 그룹 내에서 리더와도 같은 위치를 차지한다.</Text>
                </Content>
            </Container>
        );
    }
}