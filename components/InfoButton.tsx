import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, useColorScheme } from 'react-native';
import { Link } from 'expo-router';

import Colors from '../constants/Colors';

export default () => { 
  const colorScheme = useColorScheme();

  return (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
)};
