import React, { useEffect, useState, useContext } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { InputAddTask } from "../../components/InputAddTask";
import { Task } from "../../components/Task";
import { ButtonAddTask } from "@/components/buttonAddTask";
import { TaskContext } from "@/context/TaskContext";
import { TaskProps, RootStackParamList } from "@/utils/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Title } from "./styles";
import { Calendar } from "react-native-calendars"; // Importing the Calendar

type Props = NativeStackScreenProps<RootStackParamList>;

const MyCalendar = () => {
  return (
    <View style={styles.calendarContainer}>
      <Calendar
        markedDates={{
          "2024-10-04": { selected: true, marked: true, selectedColor: "blue" },
          "2024-10-10": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2024-10-15": { disabled: true, disableTouchEvent: true },
        }}
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
      />
    </View>
  );
};

export default function Home() {
  const navigation = useNavigation<Props["navigation"]>();
  const { tasks, createTask, setTasks } = useContext(TaskContext);

  function handleTaskChangeStatus(taskToChange: TaskProps) {
    const updatedTasks = tasks.filter(
      (task) => task.title !== taskToChange.title
    );
    const newTask = {
      id: taskToChange.id,
      subtitle: taskToChange.subtitle,
      title: taskToChange.title,
      status: !taskToChange.status,
    };
    updatedTasks.push(newTask);
    setTasks(updatedTasks);
  }

  function handleTaskDelete(taskToDelete: TaskProps) {
    Alert.alert(
      `Deletar a atividade ${taskToDelete.title.toUpperCase()} de sua lista?`,
      `Para adicioná-la novamente, você terá que adicionar manualmente`,
      [
        {
          text: "Sim",
          onPress: () => {
            const updatedTasks = tasks.filter(
              (task) => task.title !== taskToDelete.title
            );
            setTasks(updatedTasks);
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  }

  function handlePress() {
    navigation.navigate("Details");
  }

  return (
    <View style={styles.container}>
      <MyCalendar /> {/* Adding the Calendar component */}
      <View style={styles.content}>
        <Title>Meu Dia</Title>

        <View style={styles.tasks}>
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Task
                id={item.id}
                title={item.title}
                status={item.status}
                onCheck={() => handleTaskChangeStatus(item)}
                onRemove={() => handleTaskDelete(item)}
              />
            )}
            ListEmptyComponent={() => (
              <View>
                <Text>Você ainda não cadastrou tarefas!</Text>
                <Text>Adicione uma tarefa para começar.</Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.addTask}>
        <ButtonAddTask onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEEC9",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 65,
    paddingBottom: 32,
  },
  calendarContainer: {
    marginVertical: 20,
    width: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    gap: 16,
    justifyContent: "flex-start",
  },
  tasks: {
    justifyContent: "flex-start",
    width: "100%",
    flexDirection: "column",
  },
  addTask: {
    justifyContent: "flex-end",
  },
});
