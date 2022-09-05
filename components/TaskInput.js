import { useState } from "react";
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Text,
	Modal,
	Pressable,
	Image,
} from "react-native";
import { showToast } from "../utils/ToastAndroid";
const taskImage = require("../assets/images/goal.png");

const TaskInput = ({ setTasks, modalVisibility, changeModalVisibility }) => {
	const [inputVal, setInputVal] = useState("");

	const handleChange = (val) => {
		setInputVal(val);
	};

	const addItem = () => {
		if (inputVal === "") {
			showToast("Please enter valid input!", "BOTTOM", "SHORT");
		}
		setTasks(inputVal);
		setInputVal("");
		showToast("Task Added Successfully!", "BOTTOM", "SHORT");
		changeModalVisibility();
	};

	return (
		<Modal visible={modalVisibility} animationType="slide">
			<View style={styles.formContainer}>
				<Image source={taskImage} style={styles.image} />
				<TextInput
					placeholder="Enter task"
					style={styles.input}
					onChangeText={handleChange}
					value={inputVal}
					placeholderTextColor="#120428"
				/>
				<View style={styles.btnContainer}>
					<Pressable onPress={changeModalVisibility} style={styles.cancelBtn}>
						<Text style={{ color: "white", textAlign: "center" }}>CANCEL</Text>
					</Pressable>
					<Button title="Add Task" onPress={addItem} color="#b180f0" />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	formContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		marginBottom: 24,
		backgroundColor: "#000",
	},
	image: {
		width: 100,
		height: 100,
		margin: 10,
	},
	input: {
		width: "48%",
		borderWidth: 1,
		padding: 12,
		margin: 12,
		marginRight: 27,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		borderRadius: 5,
		color: "#120428",
	},
	btnContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		height: 40,
		justifyContent: "center",
	},
	cancelBtn: {
		margin: 12,
		marginLeft: -12,
		borderRadius: 2,
		backgroundColor: "#f31282",
		width: 80,
		height: 35,
		paddingTop: "2%",
	},
});

export default TaskInput;
