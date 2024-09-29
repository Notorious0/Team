import { View, StyleSheet, Text, Image } from "react-native";

export const ScoreBox = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.match}>
          <Text style={styles.matchText}>Maç Sonucu</Text>
          <View style={styles.row}>
            <View style={styles.teamContainer}>
              <Image source={{ uri: props.homeim }} style={styles.logo} resizeMode="contain" />
              <Text style={styles.teamName}>{props.home}</Text>
            </View>
            <View style={styles.scoreBox}>
              <Text style={styles.scoreStyle}>{props.score}</Text>
            </View>
            <View style={styles.teamContainer}>
              <Image source={{ uri: props.awayim }} style={styles.logo} resizeMode="contain" />
              <Text style={styles.teamName}>{props.away}</Text>
            </View>
          </View>
          <Text style={styles.arena}>{props.arena}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  box: {
    width: 320,
    height: 170, // Height maintained
    borderRadius: 10,
    backgroundColor: "#ebebeb",
    justifyContent: "center", // Centered content
    alignItems: "center",
    margin: 10,
    padding: 10,
  },
  match: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  matchText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  teamContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    margin: 7,
  },
  scoreBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  scoreStyle: {
    fontWeight: "bold",
    fontSize: 35,
  },
  arena: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
    position: "absolute",
    bottom: -9,
  },
  teamName: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: 'center',
    fontStyle:"italic",
  },
});



