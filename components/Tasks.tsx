import TasksDiv from "./TasksDiv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

export default function Tasks(){
    return(
        <div className="bg-[#F2F4F7] flex-col w-full flex h-[100vh] items-center justify-center">
            <div className="flex gap-5">
                <TasksDiv tittle={'À FAZER'} />
                <TasksDiv tittle={'INICIADAS'} />
                <TasksDiv tittle={'CONCLUIDAS'}/>
            </div>
            <button className="bg-blue-700 mt-5 p-2 rounded-lg flex text-white items-center justify-center">
                Adicionar Tarefa
                <FontAwesomeIcon icon={faPlus} className="h-5 ml-2" />
            </button>
        </div>
          
    )
}