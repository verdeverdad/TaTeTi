import {
    Text,
    Modal,
    SafeAreaView,
    Pressable,
    View,
    ScrollView,
} from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

interface historyButtonProps {
    title: any,
    onPress: any
}


const HistoryButton = ({ title, onPress }: historyButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                pressed && { backgroundColor: "cornflowerblue" },
            ]}
        >
            {({ pressed }) => (
                <Text style={[styles.buttonText, pressed && { color: "white" }]}>
                    {title}
                </Text>
            )}
        </Pressable>
    );
};

interface historyModalProps {
    isVisible: boolean,
    onClose: any,
    history: any,
    onHistoryButtonPress: any,
}

export const HistoryModal = ({
    isVisible,
    onClose,
    history,
    onHistoryButtonPress,
}: historyModalProps) => {
    return (
        <Modal animationType="slide" visible={isVisible}>
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.headerModal}>
                    <Text style={styles.title}>Historial</Text>
                    <Pressable onPress={onClose}>
                        <AntDesign name="close" size={30} color="black" />
                    </Pressable>
                </View>

              
                <ScrollView style={styles.list}>  {
                    history.map((squares: any, move: number) => {
                        let description;
                        if (move > 0) {
                            description = "Ir al movimiento #" + move;
                        } else {
                            description = "Ir al comienzo del juego";
                        }
                        (move: any) => () => {
                            onHistoryButtonPress(move);
                            onClose();
                        };

                        const onPressHandler = (move: number) => () => {
                            onHistoryButtonPress(move);
                            onClose();
                        };
                        return <HistoryButton title={description} onPress={onPressHandler(move)} key={move} />
                            ;
                    })
                }</ScrollView>


            </SafeAreaView>
        </Modal>
    );
};