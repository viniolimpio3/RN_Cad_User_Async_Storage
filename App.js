import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useState } from 'react';

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState(0);
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmaSenha, setMostrarConfirmaSenha] = useState(false);


  function limpar() {
    setNome("");
    setEmail("");
    setCodigo(0);
    setSenha("");
    setConfirmaSenha("");
  }

  async function salvar() {
    let usuario = {
      codigo,
      nome,
      email,
      senha,
      confirmaSenha
    };

    console.log(usuario);
    console.log(codigo.length, nome.length, email.length, senha.length, confirmaSenha.length);
    
    const validations = [
      {
        condition: !(codigo.length == 0 || nome.length == 0 || email.length == 0 || senha.length == 0 || confirmaSenha.length == 0),
        message: "Todos os campos devem ser preenchidos."
      },
      {
        condition: senha === confirmaSenha,
        message: "As senhas não coincidem."
      },
      {
        condition: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        message: "Email inválido."
      },
      {
        condition: !(isNaN(codigo) || codigo <= 0),
        message: "Código deve ser maior que zero."
      },
      {
        condition: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/.test(senha),
        message: "Senha deve ter ao menos 1 caractere maiúsculo, 1 número e no mínimo 5 caracteres."
      }
    ]

    console.log(validations)
    for (let validation of validations) {
      if(!validation.condition) {
        Alert.alert(validation.message);
        return;
      }
    }

    const stringJson = JSON.stringify(usuario);

    await AsyncStorage.setItem("@usuario", stringJson);
    Alert.alert("Salvo com sucesso!!!");
  }

  async function carregar() {
    const conteudoJson = await AsyncStorage.getItem("@usuario");
    console.log(conteudoJson);
    if (conteudoJson != null) {
      const usuario = JSON.parse(conteudoJson);
      setCodigo(usuario.codigo);
      setNome(usuario.nome);
      setEmail(usuario.email);
      setSenha(usuario.senha);
      setConfirmaSenha(usuario.confirmaSenha);
    } else {
      Alert("Não há dados cadastrados!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Cadastro de usuários</Text>

      <View style={styles.areaCadastro}>
        <View style={styles.areaNome}>
          <Text style={styles.legendaNome}>Código</Text>
          <TextInput
            style={styles.campoNome}
            keyboardType="numeric"
            onChangeText={(codigo) => setCodigo(codigo)}
            value={codigo}
          />
        </View>
      </View>

      <View style={styles.areaCadastro}>
        <View style={styles.areaTelefone}>
          <Text style={styles.legendaTelefone}>Nome</Text>
          <TextInput
            style={styles.campoTelefone}
            onChangeText={(nome) => setNome(nome)}
            value={nome}
          />
        </View>
        <View style={styles.areaNome}>
          <Text style={styles.legendaNome}>Email</Text>
          <TextInput
            style={styles.campoNome}
            keyboardType="email-address"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
        </View>
      </View>

      <View style={styles.areaCadastro}>
        <View style={styles.areaTelefone}>
          <Text style={styles.legendaTelefone}>Senha</Text>
          <View style={styles.senhaContainer}>
            <TextInput
              secureTextEntry={!mostrarSenha}
              style={[styles.campoTelefone, { flex: 1 }]}
              onChangeText={(senha) => setSenha(senha)}
              value={senha}
            />
            <TouchableOpacity
              style={styles.botaoMostrarSenha}
              onPress={() => setMostrarSenha(!mostrarSenha)}
            >
              <Text>{mostrarSenha ? '👁️' : '👁️‍🗨️'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.areaTelefone}>
          <Text style={styles.legendaTelefone}>Confirmação de senha</Text>
          <View style={styles.senhaContainer}>
            <TextInput
              secureTextEntry={!mostrarConfirmaSenha}
              style={[styles.campoTelefone, { flex: 1 }]}
              onChangeText={(confirmaSenha) => setConfirmaSenha(confirmaSenha)}
              value={confirmaSenha}
            />
            <TouchableOpacity
              style={styles.botaoMostrarSenha}
              onPress={() => setMostrarConfirmaSenha(!mostrarConfirmaSenha)}
            >
              <Text>{mostrarConfirmaSenha ? '👁️' : '👁️‍🗨️'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.areaBotoes}>
        <TouchableOpacity style={styles.botaoSalvar} onPress={() => salvar()}>
          <Text style={styles.legendaBotao}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLimpar} onPress={() => limpar()}>
          <Text style={styles.iconeLimpar}>🧹</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoCarregar}
          onPress={() => carregar()}
        >
          <Text style={styles.legendaBotao}>Carregar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}