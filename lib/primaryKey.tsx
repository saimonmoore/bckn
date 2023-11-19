import { useEffect, useState } from "react";
import b4a from "b4a";
import * as Crypto from 'expo-crypto';
import { getData, storeData } from "./localStore";

function randomBytes(n: number) {
  const buf = b4a.allocUnsafe(n);
  Crypto.getRandomValues(buf);

  return buf;
}

export const usePrimaryKey = () => {
  const [primaryKey, setPrimaryKey] = useState();

  useEffect(() => {
    (async () => {
      let key = await getData("primary-key");

      if (key === null) {
        const newKey = b4a.toString(randomBytes(32), "hex");
        await storeData("primary-key", newKey);
        key = newKey;
      }

      setPrimaryKey(b4a.from(key, "hex"));
    })();
  }, []);

  return primaryKey;
};
