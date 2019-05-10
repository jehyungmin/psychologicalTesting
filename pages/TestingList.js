import React, { Component } from 'react';
import {Container, Content, Header, Body, Title, List, ListItem, Text } from 'native-base';

export default class TestingList extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>심리테스트 목록</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <ListItem onPress={() => this.props.navigation.push('Home')}>
                            <Text>> 손 모양 보기</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.push('Animal')}>
                            <Text>> 보이는 동물 말하기</Text>
                        </ListItem> 
                    </List>
                </Content>
            </Container>
        );
    }
}

