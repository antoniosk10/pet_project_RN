import analytics from '@react-native-firebase/analytics';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import {Button, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {notificationListener} from '../notification';

type StackParamList = {
  Home: undefined;
  Test: undefined;
};

type Props = {
  navigation: StackNavigationProp<StackParamList>;
};

export default function Home({navigation}: Props) {
  useEffect(() => {
    notificationListener();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Button
          title="Go to Test"
          onPress={() => navigation.navigate('Test')}
        />
        <Button
          title="Add To Basket"
          onPress={async () =>
            await analytics().logEvent('Evvent', {
              item: 'hello',
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}
