"use client";
import TasksDiv from "./TasksDiv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { useState } from "react";

export class Task{
    titulo: string;
    descricao: string;
    id: any;

    constructor(titulo: string, descricao: string, id: any){
        this.titulo = titulo;
        this.descricao = descricao;
        this.id = id;
    }
}

export class GerenciadorDeTask{
    public Tasks : Task[] = []

    public AdicionarTask(){
       
    }

    public RemoverTask(id : any){

    }
    
    public EditarTask(){

    }
}

export default function Tasks(){
    const gerenciadorDeTask = new GerenciadorDeTask();
    
    const [mostrarDiv, setMostrarDiv] = useState(false); 
    
    function criarTask() {
        setMostrarDiv(true)
    }
    
    return (
        <div className="bg-[#F2F4F7] flex-col w-full flex h-[100vh] items-center justify-center">
            <div className="flex gap-5">
                <TasksDiv tittle={'À FAZER'} />
                <TasksDiv tittle={'INICIADAS'} />
                <TasksDiv tittle={'CONCLUIDAS'}/>
            </div>
            {mostrarDiv && (
                <div className="flex items-center justify-center flex-col absolute bg-[#F2F4F7] shadow-xl rounded-lg w-[360px] h-40">
                    <input type="text" className="outline-none pl-2 w-[330px] h-10 rounded-lg" placeholder="Nome" />
                    <textarea placeholder="Descrição" className="mt-2 outline-none rounded-lg resize-none w-[330px] h-[70px] pl-2 pt-1"></textarea>
                    <div className="h-[100vh] blackblur w-full bg-black opacity-35 absolute"></div>
                </div>
            )}
            <button onClick={criarTask} className="bg-blue-600 font-bold mt-5 p-2 rounded-lg flex text-white items-center justify-center">
                Adicionar Tarefa
                <FontAwesomeIcon icon={faPlus} className="h-5 ml-2" />
            </button>
        </div>
    )
}