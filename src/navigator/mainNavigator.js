import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps96786Navigator from '../features/Maps96786/navigator';
import Settings96764Navigator from '../features/Settings96764/navigator';
import Settings96749Navigator from '../features/Settings96749/navigator';
import NotificationList96748Navigator from '../features/NotificationList96748/navigator';
import Maps96747Navigator from '../features/Maps96747/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps96786: { screen: Maps96786Navigator },
Settings96764: { screen: Settings96764Navigator },
Settings96749: { screen: Settings96749Navigator },
NotificationList96748: { screen: NotificationList96748Navigator },
Maps96747: { screen: Maps96747Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
