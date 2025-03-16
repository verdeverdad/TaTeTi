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
    return (  // botones con estilo si esta presionado o no
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
    onClose: () => void,
    history: any,
    onHistoryButtonPress: any,
}

export const HistoryModal = ({
    isVisible, //si es visible o no
    onClose, //boton para cerrar
    history, //historial de movimientos
    onHistoryButtonPress, // boton que ejecuta historial de jugadas
}: historyModalProps) => {
    return (
        <Modal animationType="slide" visible={isVisible}>
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.headerModal}>
                    <Text style={styles.title}>Historial</Text>
                    <Pressable onPress={onClose}> 
                        <AntDesign name="close" size={30} color="black" /> 
                    </Pressable>  //boton de cierre del modal 
                </View>

              
                <ScrollView style={styles.list}>  {
                    history.map((squares: any, move: number) => { //move es el index de la funcion map
                        let description;  //texto de los botones del historial
                        if (move > 0) {
                            description = "Ir al movimiento #" + move;
                        } else {
                            description = "Ir al comienzo del juego";
                        }
                        (move: any) => () => {
                            onHistoryButtonPress(move); //vuelve al movimiento y cierra el modal
                            onClose();
                        };

                        const onPressHandler = (move: number) => () => {
                            onHistoryButtonPress(move);
                            onClose();
                        };
                        return <HistoryButton title={description} onPress={onPressHandler(move)} key={move} />
                            ; // boton de los movimientos descripcion mas funcion que vuelve al movimiento y key como id
                    })
                }</ScrollView>


            </SafeAreaView>
        </Modal>
    );
};