import { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { getData, storeData } from '../../lib/localStore';
import { usePrimaryKey } from '../../lib/primaryKey';

export default function TabTwoScreen() {
  const [ key, setKey] = useState(0);
  const primaryKey = usePrimaryKey();

  useEffect(() => {
    (async () => {
        let storedKey = await getData('key');

        if (!storedKey) {
          const newKey = Math.round(Math.random() * 100);
          storedKey = newKey.toString();
          await storeData('key', storedKey);
        }

        setKey(parseInt(storedKey, 10));
      })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>Key: {key}</Text>
      <Text style={styles.title}>Primary: {primaryKey}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
