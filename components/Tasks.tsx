"use client";
import TasksDiv from "./TasksDiv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { motion } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom';
import NewTask from "./NewTask";

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

    public AdicionarTask() {
        const taskAdd = document.querySelector(".taskAdd");
        const blur = document.createElement("div");
        blur.classList.add("blur");

        const newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add("taskContainer");
        taskAdd?.appendChild(newTaskContainer);

        const newTaskElement = (
            <NewTask />
        );

        ReactDOM.render(newTaskElement, newTaskContainer);
        taskAdd?.appendChild(blur);

        setTimeout(() => {
            blur.classList.add("blur-active");
        }, 10);
    }


    public RemoverTask(id: any) {
        
    }

    public CancelarTask() {
        const cancelButton = document.querySelector("cancelButton")
        cancelButton?.addEventListener("click", () => {
            
        })
    }
}

export default function Tasks() {
    const Gerenciador = new GerenciadorDeTask();

    const adicionarTaskHandler = () => {
        Gerenciador.AdicionarTask();
    };

    return (
        <div className="bg-[#F2F4F7] flex-col w-full flex h-[100vh] items-center justify-center relative">
            <div className="flex gap-5">
                <TasksDiv tittle={'À FAZER'} />
                <TasksDiv tittle={'INICIADAS'} />
                <TasksDiv tittle={'CONCLUIDAS'} />
            </div>
            <div className="taskAdd flex absolute items-center flex-col justify-center">
            
            </div>
            <button onClick={adicionarTaskHandler} className="bg-blue-600 font-bold mt-5 p-2 rounded-lg flex text-white items-center justify-center hover:bg-blue-800 hover:scale-105 transition-all duration-300">
                    Adicionar Tarefa
                    <FontAwesomeIcon icon={faPlus} className="h-5 ml-2" />
            </button>
        </div>
    );
}
