import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
	return (
		<View>
			<Text>Sign Up</Text>
			<Link href="/sign-in" className="mt-4 px-2 py-1 border rounded-lg">
				Log in
			</Link>
		</View>
	);
};

export default SignUp;
