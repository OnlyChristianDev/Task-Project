import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewTaskProps {
    cancelarTask: () => void;
    adicionarTask: (taskName: string, taskDescription: string) => void;
}

export default function NewTask({ cancelarTask, adicionarTask }: NewTaskProps) {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleAddTask = () => {
        adicionarTask(taskName, taskDescription); 
    };

    return (
        <motion.div
            className="taskadd"
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -150 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="tittle">Crie sua Tarefa</h1>
            <input 
                placeholder="Digite o nome da tarefa" 
                onChange={(e) => setTaskName(e.target.value)} 
                className="input" 
            />
            <textarea 
                placeholder="Digite a descrição da tarefa" 
                onChange={(e) => setTaskDescription(e.target.value)} 
                className="textarea" 
            />
            <div className="confirmation">
                <button onClick={cancelarTask} className="cancelButton">Cancelar</button>
                <button onClick={handleAddTask} className="ConfirmButton">Adicionar</button>
            </div>
        </motion.div>
    );
}
