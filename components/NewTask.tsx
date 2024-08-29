import React from 'react';
import { motion } from 'framer-motion';

interface NewTaskProps {
    cancelarTask: () => void;
}

export default function NewTask({ cancelarTask }: NewTaskProps) {
    return (
        <motion.div
            className="taskadd"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="tittle">Crie sua Tarefa</h1>
            <input placeholder="Digite o nome da tarefa" className="input" />
            <textarea placeholder="Digite a descrição da tarefa" className="textarea" />
            <div className="confirmation">
                <button onClick={cancelarTask} className="cancelButton">Cancelar</button>
                <button className="ConfirmButton">Adicionar</button>
            </div>
        </motion.div>
    );
}
