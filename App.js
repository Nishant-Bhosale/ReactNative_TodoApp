import { useState } from "react";
import { StyleSheet, Text, View, ToastAndroid, FlatList } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
	const [items, setItems] = useState([]);

	const deleteItem = (itemVal) => {
		const filteredItems = items.filter((item) => item !== itemVal);
		setItems(filteredItems);
		ToastAndroid.showWithGravity(
			"Task Deleted Successfully!",
			ToastAndroid.BOTTOM,
			ToastAndroid.LONG,
		);
	};

	const setTasks = (inputVal) => {
		setItems((prev) => {
			return [...prev, inputVal];
		});
	};
	return (
		<View style={styles.appContainer}>
			<TaskInput setTasks={setTasks} />
			<View style={styles.itemsContainer}>
				<Text style={styles.taskHeading}>List Of Tasks</Text>
				{items.length ? (
					<FlatList
						data={items}
						renderItem={(items) => (
							<TaskItem itemData={items} deleteItem={deleteItem} />
						)}
						alwaysBounceVertical={true}
					/>
				) : (
					<Text>No Tasks Found</Text>
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
	},
	taskHeading: {
		fontSize: 28,
	},
});
