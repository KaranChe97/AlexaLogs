import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Response from './src/Components/response';
import Request from './src/Components/request';


export default class HelloWorldApp extends Component {
  render() {
    return (
      <Container>
    <Header hasTabs />
    <Tabs initialPage={1}>
      <Tab heading="TMDB Alexa logs">
        <Request />
      </Tab>
    </Tabs>
  </Container>
    );
  }
}
