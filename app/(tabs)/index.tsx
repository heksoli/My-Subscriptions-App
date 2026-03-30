import { styled } from "nativewind";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import ListHeader from "@/components/list-header";
import SubscriptionCard from "@/components/subscription-card";
import UpcomingSubscriptionsCard from "@/components/upcoming-subscriptions-card";
import {
	HOME_BALANCE,
	HOME_SUBSCRIPTIONS,
	HOME_USER,
	UPCOMING_SUBSCRIPTIONS,
} from "@/constants/config";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { formatCurrency, formatSubscriptionDateTime } from "@/lib/utils";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
	const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<
		string | null
	>(null);

	return (
		<SafeAreaView className="flex-1 bg-background p-5">
			<FlatList
				ListHeaderComponent={() => (
					<>
						<View className="home-header">
							<View className="home-user">
								<Image source={images.avatar} className="home-avatar" />
								<Text className="home-user-name">{HOME_USER.name}</Text>
							</View>

							<Image source={icons.add} className="home-add-icon" />
						</View>

						<View className="home-balance-card">
							<Text className="home-balance-label">Balance</Text>
							<View className="home-balance-row">
								<Text className="home-balance-amount">
									{formatCurrency(HOME_BALANCE.amount)}
								</Text>
								<Text className="home-balance-date">
									{formatSubscriptionDateTime(HOME_BALANCE.nextRenewalDate)}
								</Text>
							</View>
						</View>

						<View className="mb-4">
							<ListHeader title="Upcoming Subscriptions" />
							<FlatList
								data={UPCOMING_SUBSCRIPTIONS}
								renderItem={({ item }) => (
									<UpcomingSubscriptionsCard {...item} />
								)}
								keyExtractor={(item) => item.id}
								horizontal
								showsHorizontalScrollIndicator={false}
								ListEmptyComponent={
									<Text className="home-empty-state">
										No upcoming renewals yet.
									</Text>
								}
							/>
						</View>

						<ListHeader title="All Subscriptions" />
					</>
				)}
				data={HOME_SUBSCRIPTIONS}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<SubscriptionCard
						{...item}
						expanded={expandedSubscriptionId === item.id}
						onPress={() =>
							setExpandedSubscriptionId((current) =>
								current === item.id ? null : item.id,
							)
						}
					/>
				)}
				extraData={expandedSubscriptionId}
				ItemSeparatorComponent={() => <View className="h-4" />}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={
					<Text className="home-empty-state">No subscriptions yet.</Text>
				}
				contentContainerClassName="pb-20"
			/>
		</SafeAreaView>
	);
}
