
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FacebookLogin from './../components/facebooklogin';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Active from '../components/active';
import Home from '../components/home';
import Chat from './../components/chat'
import Message from './../components/Message'
const TabBarComponent = props => <BottomTabBar {...props} />;

// let HomeStacks = createStackNavigator({
//     Home:{
//         screen:Home,
      
//     }
// })

const TabScreens = createBottomTabNavigator({
    Users: {
        screen: Chat,
    },
    Active: {
        screen: Active
    }
},
);



let AppNavigator = createStackNavigator({ FacebookLogin: FacebookLogin });

let AppStack = createStackNavigator({ MainScreen: Home,Message:Message});

let SwitchNav = createAppContainer(createSwitchNavigator({ Auth: AppNavigator, Main: AppStack }))
let TabNav = createAppContainer(TabScreens)
export {
    SwitchNav,
    TabNav
};

