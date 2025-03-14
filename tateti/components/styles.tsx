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

      modalContainer: {
        flex: 1,
      },
      headerModal: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#DDD",
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingBottom: 10,
        marginBottom: 20,
      },
      title: {
        fontSize: 30,
        fontWeight: "bold",
      },
      list: { flex: 1, width: "100%", paddingHorizontal: 40 },
      button: {
        width: "100%",
        backgroundColor: "#DDD",
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
})