import { styles } from '@/assets/styles/home.styles'
import { useClerk } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { Alert, TouchableOpacity } from 'react-native'
import { COLORS } from '@/constants/Colors'

export const SignOutButton = () => {
    // Use `useClerk()` to access the `signOut()` function
    const { signOut } = useClerk();

    const handleSignOut = async () => {
        Alert.alert("Logout", "Are you sure you want to log out?", [
            { text: "Cancel", style: "cancel" },
            { text: "Logout", style: "destructive", onPress: () => signOut() },
        ]);
    };


    return (
        <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
            <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
        </TouchableOpacity>
    );
};