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

export default class ReferenceScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Here"
        onPress={() => navigate("Profile", { name: "Jane" })}
      />
    );
  }
}

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
