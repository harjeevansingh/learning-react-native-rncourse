import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';
import React, { useState } from 'react';

const GoalInput = ({ addGoalHandler, visible, closeModal }) => {
	const [goalText, setGoalText] = useState('');

	const goalInputHandler = (enteredText) => {
		setGoalText(enteredText);
	};

	const handleAddGoal = () => {
		addGoalHandler(goalText);
		setGoalText('');
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					value={goalText}
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={handleAddGoal} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={closeModal} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 24,
        marginHorizontal:16,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '100%',
		padding: 8,
	},
	buttonContainer: {
        marginTop: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
	},
    button:{
        width:'40%',
        marginHorizontal:8
    }
});
