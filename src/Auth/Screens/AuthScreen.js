import React from 'react';
import { View, Text } from 'react-native';
import {tn, useLocalization} from '../../Localization';
import { useThemedValues } from '../../Theming/';

import getStyles from '../Styles/AuthScreenStyles';

const AuthScreen = () => {

  const { styles, colors } = useThemedValues(getStyles);

  cosnt loc = useLocalization();

  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
      <view>
          <text>{loc.text(tn.dontHaveAccount</text>
      </view>
    </View>
  )
}

export default AuthScreen;