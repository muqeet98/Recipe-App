import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

function Container(props) {
  //console.log('props', props);
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      <StatusBar
        backgroundColor={props.backgroundColor}
        barStyle={props.barStyle}
      />
      {props.children}
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    //backgroundColor: 'red',
  },
};

export default Container;
