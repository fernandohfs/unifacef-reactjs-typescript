import OneSignal from 'react-onesignal';
import { configs } from '../configs';

const options = { autoRegister: true, autoResubscribe: true, notifyButton: { enable: true } }

const appId = configs.onesignal || '';

OneSignal.initialize(appId, options);

try {
  OneSignal.registerForPushNotifications();
} catch (error) {
}