import {Container, AddTaskText, ButtonAdd} from './styles'
import { Feather } from '@expo/vector-icons';

type Props = {
    onPress: () => void;
}

export function ButtonAddTask({onPress}: Props) {
    return (
        <Container>
            <ButtonAdd onPress={onPress}>
                <Feather name="plus-circle" size={20} color="#1D1B20" />
                <AddTaskText>Adicionar</AddTaskText>
            </ButtonAdd>
        </Container>
    )
 
}