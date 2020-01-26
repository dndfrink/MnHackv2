import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./components/mainscreen";
import CommunityScreen from "./components/CommunityScreen.js";
import DataScreen from "./components/DataScreen";
import ReferenceScreen from "./components/ReferenceScreen";
import RefSearch from "./components/RefSearch";
import StrawberryDeviceScreen from "./components/StrawberryDeviceScreen";

const MainNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen },
  ReferenceScreen: { screen: ReferenceScreen },
  DataScreen: { screen: DataScreen },
  CommunityScreen: { screen: CommunityScreen },
  StrawberryDeviceScreen: { screen: StrawberryDeviceScreen },
  RefSearch: { screen: RefSearch }
});

const App = createAppContainer(MainNavigator);

export default App;

// export default function App() {
//   const [courseGoals, setCourseGoals] = useState([]);
//   const [isAddMode, setIsAddMode] = useState(false);

//   const addGoalHandler = goalTitle => {
//     setCourseGoals(currentGoals => [
//       ...currentGoals,
//       { id: Math.random().toString(), value: goalTitle }
//     ]);
//     setIsAddMode(false);
//   };
//   const removeGoalHandler = goalId => {
//     setCourseGoals(currentGoals => {
//       return currentGoals.filter(goal => goal.id !== goalId);
//     });
//   };
//   const cancelGoalAdditionHandler = () => {
//     setIsAddMode(false);
//   };

//   return (
//     <View style={styles.screen}>
//       <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
//       <GoalInput
//         visible={isAddMode}
//         onAddGoal={addGoalHandler}
//         onCancel={cancelGoalAdditionHandler}
//       />
//       <FlatList
//         keyExtractor={(item, index) => item.id}
//         data={courseGoals}
//         renderItem={itemData => (
//           <GoalItem
//             id={itemData.item.id}
//             onDelete={removeGoalHandler}
//             title={itemData.item.value}
//           />
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     padding: 70
//   }
// });
