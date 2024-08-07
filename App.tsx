import React, {useEffect} from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native';
import RNCallKeep from 'react-native-callkeep';

const App = () => {
  useEffect(() => {
    const options = {
      ios: {
        appName: 'My app name',
      },
      android: {
        alertTitle: 'Permissions required',
        alertDescription:
          'This application needs to access your phone accounts',
        cancelButton: 'Cancel',
        okButton: 'ok',
        imageName: 'phone_account_icon',
        additionalPermissions: [PermissionsAndroid.PERMISSIONS.CALL_PHONE],
      },
    };

    RNCallKeep.setup(options);
  }, []);

  const startCall = () => {
    const callUUID = 'unique-call-id'; // Generate or use a unique call ID
    const handle = '1234567890'; // The phone number or ID of the person you want to call
    const contactName = 'John Doe'; // Name of the contact

    RNCallKeep.startCall(callUUID, handle, contactName);
  };

  return (
    <View>
      <Text>React Native Callkeep Example</Text>
      <Button title="Start Call" onPress={startCall} />
    </View>
  );
};

export default App;
