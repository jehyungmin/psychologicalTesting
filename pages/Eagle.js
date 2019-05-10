import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import {Image} from 'react-native';
import Styles from '../styles/Styles';

export default class Eagle extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>독수리</Text>

                    <Image source={require('../assets/Eagle.png')}
                        resizeMode={'contain'}
                        style={Styles.imageStyle}
                    />

                    <Text>독수리를 고른 사람은 자신의 목표와 야심을 끊임없이 추구하지만, 자신의 감정이나 타인의 신뢰를 얻는 것을 더욱더 중요시한다.</Text>
                    <Text>때문에 이들은 다양한 상황 속에서도 유연한 태도를 보일 줄 알아야 한다.</Text>
                </Content>
            </Container>
        );
    }
}
