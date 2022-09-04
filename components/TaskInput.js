import React, { useState } from "react";
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	ToastAndroid,
} from "react-native";

const TaskInput = ({ setTasks }) => {
	const [inputVal, setInputVal] = useState("");

	const handleChange = (val) => {
		setInputVal(val);
	};

	const addItem = () => {
		if (inputVal === "") return;
		setTasks(inputVal);
		setInputVal("");
		ToastAndroid.showWithGravity(
			"Task Added Successfully!",
			ToastAndroid.SHORT,
			ToastAndroid.BOTTOM,
		);
	};

	return (
		<View style={styles.formContainer}>
			<TextInput
				placeholder="Enter task"
				style={styles.input}
				onChangeText={handleChange}
				value={inputVal}
			/>
			<Button title="Add Task" onPress={addItem} />
		</View>
	);
};

const styles = StyleSheet.create({
	formContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		flex: 1,
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	input: {
		width: "70%",
		borderWidth: 1,
		padding: 8,
		marginRight: 8,
		borderColor: "#ccc",
	},
});

export default TaskInput;
