import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const TaskItem = ({ itemData: { item }, deleteItem }) => {
	return (
		<View>
			<Pressable android_ripple={{ color: "red" }} style={styles.taskItem}>
				<Text style={{ color: "white", paddingLeft: 12 }}>{item}</Text>
				<Text style={styles.removeTaskBtn} onPress={() => deleteItem(item)}>
					X
				</Text>
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
		borderColor: "lightgreen",
		padding: 8,
		marginVertical: 12,
		borderRadius: 3,
		width: "100%",
		backgroundColor: "#210644",
	},
	removeTaskBtn: {
		color: "white",
		fontSize: 18,
		width: 25,
		textAlign: "center",
	},
});
export default TaskItem;
