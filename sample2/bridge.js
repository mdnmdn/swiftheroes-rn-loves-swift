import { NativeModules } from 'react-native';

const myBridge = NativeModules.RNBridge

console.log(NativeModules);

export const writeNativeText = myBridge.writeText;

