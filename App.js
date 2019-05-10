/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from "./pages/Home";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Second from "./pages/Second";
import TestingList from './pages/TestingList';
import Animal from './pages/Animal';
import Tiger from './pages/Tiger';
import Eagle from './pages/Eagle';
import Elephant from './pages/Elephant';
import Fish from './pages/Fish';
import Puppy from './pages/Puppy';
import Squirrel from './pages/Squirrel';
import Frog from './pages/Frog';
import HyungMin from './pages/HyungMin';

const StackNavigagor = createStackNavigator({
  TestingList,
  Home,
  Second,
  Animal,
  Tiger,
  Eagle,
  Elephant,
  Fish,
  Frog,
  Puppy,
  Squirrel,
  HyungMin
});

const AppContainer = createAppContainer(StackNavigagor);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}


