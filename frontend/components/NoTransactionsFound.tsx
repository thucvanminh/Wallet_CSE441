import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/assets/styles/home.styles";
import { COLORS } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


const NoTransactionsFound = () => {
    const router = useRouter();

    return (
        <View style={styles.emptyState}>
            <Ionicons
                style={styles.emptyStateIcon}
                name="receipt-outline"
                size={60}
                color={COLORS.textLight}
            />
            <Text style={styles.emptyStateTitle}>No transactions yet.</Text>
            <Text style={styles.emptyStateText}>
                Start tracking your finances by adding your first transaction.
            </Text>
            <TouchableOpacity style={styles.emptyStateButton} onPress={() => router.push("/create")}>
                <Ionicons name="add-circle" size={18} color={COLORS.white} />
                <Text style={styles.emptyStateButtonText}>Add Transaction</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NoTransactionsFound;



