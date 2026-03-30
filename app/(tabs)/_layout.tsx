import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabIcon from "@/components/tab-icon";
import { tabs } from "@/constants/config";
import { colors, components } from "@/constants/theme";

const TabLayout = () => {
	const insets = useSafeAreaInsets();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					bottom: Math.max(insets.bottom, components.tabBar.horizontalInset),
					height: components.tabBar.height,
					marginHorizontal: components.tabBar.horizontalInset,
					borderRadius: components.tabBar.radius,
					backgroundColor: colors.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarItemStyle: {
					paddingVertical:
						components.tabBar.height / 2 - components.tabBar.iconFrame / 1.6,
				},
				tabBarIconStyle: {
					alignItems: "center",
					width: components.tabBar.iconFrame,
					height: components.tabBar.iconFrame,
				},
			}}
		>
			{tabs.map((tab) => (
				<Tabs.Screen
					key={tab.name}
					name={tab.name}
					options={{
						title: tab.title,
						tabBarIcon: ({ focused }) => (
							<TabIcon focused={focused} icon={tab.icon} />
						),
					}}
				/>
			))}
		</Tabs>
	);
};

export default TabLayout;
