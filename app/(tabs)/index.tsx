import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
	return (
		<View className="flex-1 items-center justify-center bg-white flex-col gap-y-4">
			<Text className="text-xl font-bold text-blue-500">
				Welcome to Nativewind!
			</Text>

			<Link href="/onboarding" className="px-2 py-1 border rounded-lg">
				Go to Onboarding
			</Link>

			<Link href="/sign-in" className="px-2 py-1 border rounded-lg">
				Sign In
			</Link>
		</View>
	);
}
