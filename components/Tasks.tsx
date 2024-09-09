"use client"
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import TasksDiv from "./TasksDiv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import NewTask from "./NewTask";
import FinallyTasks from './FinallyTask';

export class Task {
    titulo: string;
    descricao: string;
    id: any;

    constructor(titulo: string, descricao: string, id: any) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.id = id;
    }
}

export class GerenciadorDeTask {
    public Tasks: Task[] = [];
    private setShowNewTask: React.Dispatch<React.SetStateAction<boolean>>;
    private setShowFinallyTasks: React.Dispatch<React.SetStateAction<boolean>>;

    constructor(setShowNewTask: React.Dispatch<React.SetStateAction<boolean>>,
        setShowFinallyTasks: React.Dispatch<React.SetStateAction<boolean>>
    ) {
        this.setShowNewTask = setShowNewTask;
        this.setShowFinallyTasks = setShowFinallyTasks;
        this.CriarTask = this.CriarTask.bind(this);
        this.CancelarTask = this.CancelarTask.bind(this);
        this.adicionarTask = this.adicionarTask.bind(this);
    }

    public CriarTask() {
        const taskAdd = document.querySelector(".taskAdd");
        if (taskAdd) {
            const blur = document.createElement("div");
            blur.classList.add("blur");

            const newTaskContainer = document.createElement("div");
            newTaskContainer.classList.add("taskContainer");
            taskAdd.appendChild(newTaskContainer);

            taskAdd.appendChild(blur);

            setTimeout(() => {
                blur.classList.add("blur-active");
            }, 10);

            this.setShowNewTask(true);
        }
    }

    public CancelarTask() {
        this.setShowNewTask(false);
        const blur = document.querySelector(".blur");
        if (blur) {
            blur.classList.remove("blur-active");
            blur.classList.add("blur-inactive");

            setTimeout(() => {
                blur.remove();
            }, 300);
        }
    }

    public adicionarTask() {
        this.setShowNewTask(false);
        setTimeout(()=>{
            this.setShowFinallyTasks(true);
        }, 350)
       
    }
}

export default function Tasks() {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [showNewTask, setShowNewTask] = useState(false);
    const [showFinallyTasks, setShowFinallyTasks] = useState(false);
    const Gerenciador = new GerenciadorDeTask(setShowNewTask, setShowFinallyTasks);

    const adicionarTaskHandler = () => {
        Gerenciador.CriarTask();
    };

    return (
        <div className="bg-[#F2F4F7] flex-col w-full flex h-[100vh] items-center justify-center relative">
            <div className="flex gap-5">
                <TasksDiv tittle={'À FAZER'} />
                <TasksDiv tittle={'INICIADAS'} />
                <TasksDiv tittle={'CONCLUIDAS'} />
            </div>
            <div className="taskAdd flex absolute items-center flex-col justify-center">
                <AnimatePresence>
                    {showNewTask && (
                        <NewTask adicionarTask={Gerenciador.adicionarTask} cancelarTask={Gerenciador.CancelarTask} />
                    )}
                </AnimatePresence>
            </div>
            {showFinallyTasks && <FinallyTasks taskName={taskName} taskDescription={taskDescription} />}
            <button onClick={adicionarTaskHandler} className="bg-blue-600 font-bold mt-5 p-2 rounded-lg flex text-white items-center justify-center hover:bg-blue-800 hover:scale-105 transition-all duration-300">
                Adicionar Tarefa
                <FontAwesomeIcon icon={faPlus} className="h-5 ml-2" />
            </button>
        </div>
    );
}
