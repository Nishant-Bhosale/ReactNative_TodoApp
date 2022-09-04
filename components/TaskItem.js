import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const TaskItem = ({ itemData: { item }, deleteItem }) => {
	console.log(item);
	return (
		<View style={styles.taskItem}>
			<Text style={{ color: "white", paddingLeft: 12 }}>{item}</Text>
			<Pressable
				onPress={() => deleteItem(item)}
				android_ripple={{ color: "#dddddd" }}
			>
				<Text style={styles.removeTaskBtn}>X</Text>
			</Pressable>
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
		backgroundColor: "black",
	},
	removeTaskBtn: {
		color: "red",
		fontSize: 18,
		width: 25,
	},
});
export default TaskItem;
