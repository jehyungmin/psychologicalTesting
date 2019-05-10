import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Image } from 'react-native';
import Styles from '../styles/Styles';

export default class Eagle extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>호랑이</Text>

                    <Image source={require('../assets/Tiger.png')}
                        resizeMode={'contain'}
                        style={Styles.imageStyle}
                    />

                    <Text>호랑이를 고른 사람은 수없이 변화하는 세상에도 서두르지 않고 스스로의 뜻을 관철하는 사람이다.</Text>
                    <Text>때로는 주변 사람들에게 반항적으로 비칠 수 있으면. 타인의 실수에 대해서도 엄격한 기준을 갖춰 다소 대하기 어렵게 느껴지기도 한다.</Text>
                </Content>
            </Container>
        );
    }
}