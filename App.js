import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default App = () => {
	const [courseGoals, setCourseGoals] = useState([]);
	const [showInputModal, setShowInputModal] = useState(false);

	const addGoalHandler = (goalText) => {
		setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: goalText, id: new Date().getTime().toString()}]);
		setShowInputModal(false);
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== goalId);
		});
	}

	const startAddGoalHandler = () => {
		setShowInputModal(true);
	}

	const closeModal = () => {
		setShowInputModal(false);
	}

	return (
		<View style={styles.appContainer}>
			<Button title="Add New Goal" color={'violet'} onPress={startAddGoalHandler}/>
			 <GoalInput addGoalHandler={addGoalHandler} visible={showInputModal} closeModal={closeModal}/>
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
