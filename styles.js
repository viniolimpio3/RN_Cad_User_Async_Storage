import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  legendaNome: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  legendaTelefone: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  tituloPrincipal: {
    fontSize: 25,
    fontWeight: "bold",
    width: "90%",
    backgroundColor: "#196e50",
    padding: 5,
    height: 50,
    textAlign: "center",
    color: "#FFF",
    borderRadius: 5,
    marginBottom: 40,
  },
  campoNome: {
    fontSize: 16,
    width: '100%',
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#032b1d",
    marginBottom: 10,
  },

  campoTelefone: {
    fontSize: 16,
    width: '100%',
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#032b1d",
    marginBottom: 10,
  },
  botaoSalvar: {
    width: "40%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#164cb8",
    alignItems: "center",
    justifyContent: "center",
  },

  botaoCarregar: {
    width: "40%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#717785",
    alignItems: "center",
    justifyContent: "center",
  },
  legendaBotao: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#FFF",
  },

  areaBotoes: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  imagem:{
     width: 100,
     height: 100,
  },

  areaCadastro: {
    flexDirection: "row",
    width: "90%",
    paddingHorizontal: 10,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  areaNome:{
    width: '48%',
  },
  areaTelefone:{
    width: '48%',
  },
  iconeLimpar:{
    fontSize: 40,
  }
});

export default styles;
