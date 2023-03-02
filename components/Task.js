import {List, Checkbox, IconButton} from 'react-native-paper'
const Task = (props)=>{
    const taskText = props.taskText
    return(
        <List.Item title={taskText} left={()=>{<Checkbox.Android/>}} right={()=>{<IconButton/>}}/>
    );
}

export default Task;