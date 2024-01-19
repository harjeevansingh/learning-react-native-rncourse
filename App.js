import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default App = () => {
	const [goalText, setGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setGoalText(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: goalText, id: new Date().getTime().toString()}]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(goalItem) => (
						<View style={styles.goalItem}>
							<Text style={styles.goalText}>
								{goalItem.index + 1}. {goalItem.item.text}
							</Text>
						</View>
					)}
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
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	goalContainer: {
		flex: 6,
	},
	goalItem: {
		padding: 8,
		margin: 8,
		backgroundColor: 'violet',
		borderRadius: 6,
	},
	goalText: {
		color: 'white',
	},
});
