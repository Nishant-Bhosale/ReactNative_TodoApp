import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { showToast } from "./utils/ToastAndroid";
export default function App() {
	const [items, setItems] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const handleModalVisibility = () => {
		setModalIsVisible((prev) => !prev);
	};

	const deleteItem = (itemVal) => {
		const filteredItems = items.filter((item) => item !== itemVal);
		setItems(filteredItems);
		showToast("Task Deleted Successfully!", "BOTTOM", "LONG");
	};

	const setTasks = (inputVal) => {
		setItems((prev) => {
			return [...prev, inputVal];
		});
	};

	return (
		<View style={styles.appContainer}>
			<TaskInput
				setTasks={setTasks}
				modalVisibility={modalIsVisible}
				changeModalVisibility={handleModalVisibility}
			/>
			<Button
				title="Add Task"
				color="#a065ec"
				onPress={handleModalVisibility}
			/>
			<View style={styles.itemsContainer}>
				{items.length ? (
					<>
						<Text style={styles.taskHeading}>List Of Tasks</Text>
						<FlatList
							data={items}
							renderItem={(items) => (
								<TaskItem itemData={items} deleteItem={deleteItem} />
							)}
							alwaysBounceVertical={true}
						/>
					</>
				) : (
					<Text style={styles.taskHeading}>No Tasks Found</Text>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		flex: 1,
	},
	itemsContainer: {
		flex: 5,
		textAlign: "center",
	},
	taskHeading: {
		fontSize: 28,
		fontWeight: "bold",
		color: "white",
		margin: "auto",
	},
});
