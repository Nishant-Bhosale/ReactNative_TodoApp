import { ToastAndroid } from "react-native";

const showToast = (message, position, time) => {
	ToastAndroid.showWithGravity(
		message,
		ToastAndroid[position],
		ToastAndroid[time],
	);
};

export { showToast };
