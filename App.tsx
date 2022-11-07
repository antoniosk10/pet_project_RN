import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Pressable} from 'react-native';
import Torch from 'react-native-torch';
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  const [tourchIsOn, toggleTourche] = useState(false);

  const handleClick = () => {
    toggleTourche(!tourchIsOn);
  };

  useEffect(() => {
    Torch.switchState(tourchIsOn);
  }, [tourchIsOn]);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.button} onPress={handleClick}>
        <Icon
          name="power"
          size={100}
          color={tourchIsOn ? '#FAFBEE' : '#42273B'}
        />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: '#7F0759',
    shadowColor: '#42273B',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8F0',
  },
});

export default App;
