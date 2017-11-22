import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GithubApi from './GithubApi';

export default class App extends React.Component {

  componentWillMount() {
    this.setState({loading: true})
  }

  componentDidMount() {
    new GithubApi().zen().then((data) => {
      this.setState({zen: data, loading: false});
    }).catch((error) => {
      this.setState({error: error, loading: false});
    });
  }

  render() {
    const text = this.state.loading === true ? 'Loading...' : `Github zen: ${this.state.zen}`;

    return (
      <View style={styles.container}>
        <Text>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
