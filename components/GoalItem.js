import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ goalItem, deleteGoal }) => {
	const handleDeleteGoal = () => {
		deleteGoal(goalItem.item.id);
	};

	return (
		<Pressable
			onPress={handleDeleteGoal}
			android_ripple={{ color: '#210644' }}
			style={({ pressed }) => pressed && styles.pressedItem}>
			<View style={styles.goalItem}>
				<Text style={styles.goalText}>
					{goalItem.index + 1}. {goalItem.item.text}
				</Text>
			</View>
		</Pressable>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		padding: 8,
		margin: 8,
		backgroundColor: 'violet',
		borderRadius: 6,
	},
	goalText: {
		color: 'white',
	},
	pressedItem: {
		opacity: 0.5,
	},
});
