import React from 'react';
import { View, ViewStyle } from 'react-native';
import useColors from '@/shared/hooks/useColors';

export default ({
  children,
  style = {},
}: {
  children: React.ReactNode,
  style?: ViewStyle,
}) => {
  const colors = useColors()

  return (
    <View
      style={[{
        backgroundColor: colors.surface,
        borderRadius: 8,
      }, style]}
    >{children}</View>
  )
};
