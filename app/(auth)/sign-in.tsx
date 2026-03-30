import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
	return (
		<View>
			<Text>Sign In</Text>
			<Link href="/sign-up" className="mt-4 px-2 py-1 border rounded-lg">
				Create account
			</Link>
		</View>
	);
};

export default SignIn;
