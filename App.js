import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default App = () => {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (goalText) => {
		setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: goalText, id: new Date().getTime().toString()}]);
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== goalId);
		});
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput addGoalHandler={addGoalHandler} />
			<View style={styles.goalContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(goalItem) => <GoalItem goalItem={goalItem} deleteGoal={removeGoalHandler} />}
					keyExtractor={(item, index) => item.id}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalContainer: {
		flex: 6,
	},
});
