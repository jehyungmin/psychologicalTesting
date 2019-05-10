import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Body, Button, Container, Content, Header, Text, Title, List, ListItem } from 'native-base';
import Styles from '../styles/Styles';

export default class Animal extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>심리테스트</Title>
                    </Body>
                </Header>
                <Content>
                    <Image source={require('../assets/animal.png')} style={Styles.imageStyle}/>
                    <Text>Q. 가장 '먼저' 눈에 들어온 동물은 무엇인가요?</Text>
                    <View style={[Styles.hGroup, Styles.justifyCenter]}>
                        <Button style={Styles.buttonStyle} block success onPress={() => this.props.navigation.push('Tiger')}>
                            <Text>호랑이</Text>
                        </Button>
                        <Button style={Styles.buttonStyle} block success onPress={() => this.props.navigation.push('Eagle')}>
                            <Text>독수리</Text>
                        </Button>
                    </View>
                    <View style={[Styles.hGroup, Styles.justifyCenter]}>
                        <Button style={Styles.buttonStyle} block success onPress={() => this.props.navigation.push('Puppy')}>
                            <Text>강아지</Text>
                        </Button>
                        <Button style={Styles.buttonStyle} block success onPress={() => this.props.navigation.push('Elephant')}>
                            <Text>코끼리</Text>
                        </Button>
                    </View>
                    <View style={[Styles.hGroup, Styles.justifyCenter]}>
                        <Button style={Styles.buttonStyle} block success onPress={() => this.props.navigation.push('Squirrel')}>
                            <Text>다람쥐</Text>
                        </Button>
                        <Button style={Styles.buttonStyle} block success onPress={() => this.props.navigation.push('Frog')}>
                            <Text>개구리</Text>
                        </Button>
                    </View>
                    <View style={[Styles.hGroup, Styles.justifyCenter]}>
                        <Button style={Styles.buttonStyle} block success onPress={() => this.props.navigation.push('Fish')}>
                            <Text>물고기</Text>
                        </Button>
                        <Button style={Styles.buttonStyle} block success onPress={() => this.props.navigation.push('HyungMin')}>
                            <Text>제형민</Text>
                        </Button>
                    </View>
                </Content>

                
            </Container>
        );
    }
}

