// Task: Ask Copilot to explain what this native bridge code does.
import { NativeModules } from 'react-native';
const { DeviceInfoModule } = NativeModules;

export const getDeviceId = async (): Promise<string> => {
  return await DeviceInfoModule.getDeviceId();
};