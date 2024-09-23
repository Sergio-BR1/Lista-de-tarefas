import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { InputAddTask } from '../../components/InputAddTask';
import { Task } from '../../components/Task';
import { CardNumber } from '../../components/CardNumber';
import { useContext } from 'react';
import { TaskContext } from '@/context/TaskContext';
import { TaskProps } from '@/utils/types';

export default function Home() {

  const {tasks, createTask, setTasks} = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");
  const [countTask, setCountTask] = useState(0);
  const [countTaskCheck, setCountTaskCheck] = useState(0);

  function handleTaskAdd() {
    if(taskText == "") {
      console.log('vazio');
      return Alert.alert("Erro", "Tarefa está sem descrição.");
    }

    if(tasks.some((task)=> task.title === taskText)) {
      console.log('Tarefa já existe!');
      return Alert.alert("Erro", "Tarefa já existe!");
    }

    createTask(taskText);
    setTaskText('');
  }

  function handleTaskChangeStatus(taskToChange: TaskProps) {
    const updatedTasks = tasks.filter((task)=> task.title !== taskToChange.title);
    const newTask =  {
      id: taskToChange.id,
      title: taskToChange.title,
      status: !taskToChange.status,
    }
    if (newTask.status) {
      setCountTaskCheck(countTaskCheck + 1);
    }
    else {
      setCountTaskCheck(countTaskCheck - 1);
    }
    updatedTasks.push(newTask);
    setTasks(updatedTasks);
  }

  function handleTaskDelete (taskToDelete: TaskProps) {
    Alert.alert(`Deletar a atividade ${taskToDelete.title.toUpperCase()} de sua lista?`, `Para adicioná-la novamente, você terá que adicionar manualmente`,
      [
        {text: "Sim",
          onPress: () => {
            if (taskToDelete.status) {
              setCountTaskCheck(countTaskCheck - 1);
            }
            const updatedTasks = tasks.filter((task) => task.title !== taskToDelete.title)
            setTasks(updatedTasks);
          }

        },
        {text: "Cancelar", style: "cancel"}
      ]      
    ) 

  }

  useEffect(() => {
    let totalTasks = tasks.length;
    setCountTask(totalTasks);
  }, [tasks]); 


  return (
    <View style={styles.container}>
      
      <InputAddTask onPress={handleTaskAdd} onChangeText={setTaskText} value={taskText}/>

      <View style={{flexDirection: 'row', gap: 16}}>
        <CardNumber title={"Na lista"} num={countTask} color={"#1e1e1e"}/>
        <CardNumber title={"Concluídas"} num={countTaskCheck} color={"#E8BA1A"}/>
        <CardNumber title={"Não Concluídas"} num={countTask-countTaskCheck} color={"#0E9577"}/>
      </View>
      <View style={styles.tasks}>
        <Text>Tarefas: {countTask}</Text>

        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={
            ({item}) => (
              <Task
                id={item.id} 
                title={item.title}
                status={item.status}
                onCheck={()=>handleTaskChangeStatus(item)}
                onRemove={()=>handleTaskDelete(item)}

              />
            )
          }
          ListEmptyComponent={() => (
            <View>
              <Text>Você ainda não cadastrou tarefas!</Text>
              <Text>Adicione uma tarefa para começar.</Text>
            </View>
          )}
          />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEEC9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    paddingTop: 65,
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row', 
    borderRadius: 4,
    backgroundColor: '#252627',
  },
  input: {
    flex: 1,
    padding: 16,
    color: '#FFFFFF',
  },
  inputButton: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 4,
  },
  tasks: {
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'column',

  }
});


