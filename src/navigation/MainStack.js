import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon} from '../components';
import Home from '../../src/screens/Home/Home';
import Search from '../../src/screens/Search/Search';
import Splash from '../../src/screens/splash/Splash';
import Cooking from '../../src/screens/Cooking/Cooking';
import Favorite from '../../src/screens/Favorite/Favorite';
// import Login from '../../src/screens/auth/Login/Login';
import Login from '../../src/screens/auth/logIn/Login';
import Guest from '../../src/screens/auth/guest/Guest';
import Profile from '../../src/screens/Profile/Profile';
import AddRecipe from '../../src/screens/AddRecipe/AddRecipe';
import FoodDetail from '../../src/screens/FoodDetail/FoodDetail';
import Register from '../../src/screens/auth/register/Register';
import EditProfile from '../../src/screens/EditProfile/EditProfile';
import ResetPassword from '../../src/screens/ResetPassword/ResetPassword';
import AuthSelection from '../../src/screens/auth/AuthSelection/AuthSelection';
import ChooseIngredients from '../../src/screens/ChooseIngredients/ChooseIngredients';
import WalkthroughPageOne from '../../src/screens/walkthrough/walkthrougPageOne/WalkthroughPageOne';
import walkthrougPageThree from '../../src/screens/walkthrough/walkthrougPageThree/walkthrougPageThree';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DashboardTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#59AB86',
      }}>
      <Tab.Screen
        name="Home"
        component={homeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon.home color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={searchStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => <Icon.search color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={favoriteStack}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color}) => <Icon.ribbon color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}
export const homeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
    </Stack.Navigator>
  );
};
export const searchStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search" headerMode="none">
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
    </Stack.Navigator>
  );
};

export const favoriteStack = () => {
  return (
    <Stack.Navigator initialRouteName="Favorite" headerMode="none">
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
    </Stack.Navigator>
  );
};
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="AuthSelection" component={AuthSelection} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Guest" component={Guest} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Dashboard" component={DashboardTabNavigator} />
      <Stack.Screen name="AddRecipe" component={AddRecipe} />
      <Stack.Screen name="ChooseIngredients" component={ChooseIngredients} />
      <Stack.Screen name="Cooking" component={Cooking} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="WalkthroughPageOne" component={WalkthroughPageOne} />
      <Stack.Screen
        name="walkthrougPageThree"
        component={walkthrougPageThree}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
