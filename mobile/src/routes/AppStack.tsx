import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import Onboarding from '../pages/Onboarding';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import CreatedAccountSuccess from '../pages/CreatedAccountSuccess';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Onboarding" component={Onboarding} />
        <Screen name="Login" component={Login} />
        <Screen name="CreateAccount" component={CreateAccount} />
        <Screen
          name="CreatedAccountSuccess"
          component={CreatedAccountSuccess}
        />
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
