import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Image } from 'react-native';
import Styles from '../styles/Styles';

export default class Eagle extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>강아지</Text>

                    <Image source={require('../assets/Puppy.png')}
                        resizeMode={'contain'}
                        style={Styles.imageStyle}
                    />

                    <Text>강아지를 고른 당신은 거짓말을 좋아하지 않고 결과에 상관없이 항상 솔직하게 말하는 것을 선호한다.</Text>
                    <Text>이는 타인에게 가끔 미움을 사는 일이 되기도 하지만, 정작 본인은 전혀 신경을 쓰지 않는 타입니다.</Text>
                </Content>
            </Container>
        );
    }
}