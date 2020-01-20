import { creteAppContainer, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "DevRadar"
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Perfil no GitHub"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerStyle: {
          backgroundColor: "#7D40E7"
        }
      }
    }
  )
);

export default Routes;
