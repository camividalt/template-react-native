// /* -------------- Libraries - React ------------- */
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// /* ------------------- Containers ------------------- */
// // import WebView from '../containers/WebViewContainer';
// /* ------------------ Utilities ----------------- */
// import { getHeaderHeight } from '../../utilities/helpers/Platform';
// import { BLACK, WHITE } from '../../utilities/styles/Colors';
// import { headerColor } from '../components/navigation/CSHeader';
// import CSReturnButton from '../components/navigation/CSReturnButton';

// const WebViewNavigator = () => {
//     const Stack = createStackNavigator();
//     return (
//         <Stack.Navigator
//             initialRouteName="WebView"
//             screenOptions={{
//                 headerMode: 'screen',
//                 headerStyle: {
//                     height: getHeaderHeight(),
//                 },
//                 cardStyle: {
//                     backgroundColor: WHITE,
//                 },
//             }}
//         >
//             <Stack.Screen
//                 name="WebView"
//                 component={WebView}
//                 options={({ route, navigation }) => ({
//                     title: route.params.title,
//                     headerColor: headerColor.WHITE,
//                     headerLeft: () => (
//                         <CSReturnButton
//                             type="closeCircle"
//                             color={BLACK}
//                             onPress={() =>
//                                 route.params.redirect
//                                     ? route.params.atributes.showModalSignature
//                                         ? navigation.navigate(route.params.redirect, {
//                                               ...route?.params?.atributes,
//                                           })
//                                         : navigation.replace(route.params.redirect)
//                                     : navigation.goBack()
//                             }
//                         />
//                     ),
//                 })}
//             />
//         </Stack.Navigator>
//     );
// };

// export default WebViewNavigator;
