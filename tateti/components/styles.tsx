import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },

      header: {
        flex: 0.2,
        flexDirection: "row",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#267543",
      },

      headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e1e1e1"
      },

      boardContainer: {
        flex: 0.6,
      },

      footer: {
        flex: 0.2,
        backgroundColor: "#123456",
        justifyContent: "center"
      },

      square: {
        backgroundColor: "#e2e2e2",
        borderWidth: 3.5,
        borderColor: "#568999",
        justifyContent: "center",
        alignItems: "center",
        flex: 1 / 3,
      },

      boardRow: {
        flexDirection: "row",
        flex: 1 / 3,
      },

      squareText: {
        fontSize: 80,
        color: "#000"
      },

      pressable: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
})