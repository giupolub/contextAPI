import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const estilos = (tema) => {
  return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tema.fundo,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  tituloArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: tema.titulo,
  },
  lista: {
    flex: 1,
    width: '100%',
  },
  carrinhoArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  carrinhoIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: tema.titulo,
  },
  carrinhoQuantidadeArea: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carrinhoQuantidade: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#fff",
  },
  iconArea: {
    marginLeft: 16,
  },
  icon: {
    color: tema.texto,
    fontSize: 30,
  },
  botao: {
    margin: 16,
    marginBottom: 32,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: tema.botao
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: "bold",
    color: tema.preto,
    textAlign: "center"
  }
})
}