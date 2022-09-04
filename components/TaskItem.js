import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskItem = ({ itemData: { item }, deleteItem }) => {
	console.log(item);
	return (
		<View style={styles.taskItem}>
			<Text style={{ color: "white", paddingLeft: 12 }}>{item}</Text>
			<Text style={styles.removeTaskBtn} onPress={() => deleteItem(item)}>
				X
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	taskItem: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 8,
		marginVertical: 12,
		borderRadius: 3,
		width: "100%",
		backgroundColor: "#5e0acc",
	},
	removeTaskBtn: {
		color: "red",
		fontSize: 18,
		width: 25,
	},
});
export default TaskItem;
