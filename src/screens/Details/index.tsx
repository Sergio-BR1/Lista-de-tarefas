import { Container, TextAddTask, Title, TopContainer, TopButton, TopLeftText, TopCenterText, TitlesArea, TitleContainer, TitleLabel, TitlesInput } from "./styles";
import {Feather} from "@expo/vector-icons";
import { RootStackParamList } from "@/utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { TaskContext } from "@/context/TaskContext";
import { Alert } from "react-native";



type Props = NativeStackScreenProps<RootStackParamList>; 


export default function Details() {

    const {tasks, createTask, setTasks} = useContext(TaskContext);
    const [taskTitleText, setTaskTitleText] = useState("");
    const [taskSubtitleText, setTaskSubtitleText] = useState("");

    const {task} = useContext(TaskContext);

    function handleTaskAdd() {
        if(taskTitleText == "") {
          console.log('vazio');
          return Alert.alert("Erro", "Tarefa está sem descrição.");
        }
    
        if(tasks.some((task)=> task.title === taskTitleText)) {
          console.log('Tarefa já existe!');
          return Alert.alert("Erro", "Tarefa já existe!");
        }

        let subtitle = "";
    
        if (task.subtitle != '') {
            subtitle = task.subtitle!;
        }
        createTask(taskTitleText, subtitle);
        setTaskTitleText('');
        setTaskSubtitleText('');
      }

      

    const navigation = useNavigation<Props['navigation']>();

    return (
        <Container>
            <TopContainer>
                <TopButton onPress={() => navigation.popToTop()}>
                    <Feather name="chevron-left" size={24} color="#007AFF" />
                    <TopLeftText>Voltar</TopLeftText>
                </TopButton>
                
                
            </TopContainer>
            <TopCenterText>Adicionar</TopCenterText>
            <TextAddTask>ADICIONE A PRÓXIMA ATIVIDADE</TextAddTask>
            <TitlesArea>
                <TitleContainer>
                    <TitleLabel>Título</TitleLabel>
                    <TitlesInput
                    placeholder='Digite a tarefa'
                    placeholderTextColor="rgba(60, 60, 67, 0.3);"
                    keyboardType='default'
                    onChangeText={setTaskTitleText}
                    />
                </TitleContainer>
                <TitleContainer>
                    <TitleLabel>Subtítulo</TitleLabel>
                    <TitlesInput
                    placeholder='Digite a tarefa'
                    placeholderTextColor="rgba(60, 60, 67, 0.3);"
                    keyboardType='default'
                    onChangeText={setTaskSubtitleText}
                    />
                </TitleContainer>
            </TitlesArea>
        </Container>

    );
}