import { StyleSheet, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

const GoalInput = ({ addGoalHandler }) => {
	const [goalText, setGoalText] = useState('');

	const goalInputHandler = (enteredText) => {
		setGoalText(enteredText);
	};

    const handleAddGoal = () => {
        addGoalHandler(goalText);
        setGoalText('');
    }

	return (
		<View style={styles.inputContainer}>
			<TextInput value={goalText} style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
			<Button title="Add Goal" onPress={handleAddGoal} />
		</View>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
