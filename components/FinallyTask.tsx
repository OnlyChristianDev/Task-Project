import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface FinallyTasksProps {
    taskName: string;
    taskDescription: string;
    removeFinallyTask: () => void
}


export default function FinallyTasks( { taskName, taskDescription, removeFinallyTask  }: FinallyTasksProps) {
    
    const [isDragging, setIsDragging] = useState(false);
    const RemoveBlur = () => {
        const blur = document.querySelector(".blur");
        if (blur) {
            blur.classList.remove("blur-active");
            blur.classList.add("blur-inactive");
        }
    }

    const AddBlur = () => {
        const blur = document.querySelector(".blur");
        if (blur) {
            blur.classList.add("blur-active");
            blur.classList.remove("blur-inactive");
        }
    }


    return (
        <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        onDragStart={() => {
            setIsDragging(true);
            RemoveBlur(); 
        }}
        onDragEnd={() => {
            setIsDragging(false); 
            AddBlur()
        }}
        className="fixed z-[9999] flex items-center justify-center"
    > 
            <div className="h-56 rounded-md w-[500px] cursor-pointer bg-[#F2F4F7]">
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold pl-5 pt-5 text-3xl text-blue-600'> { taskName } </h1>
                    <FontAwesomeIcon onClick={removeFinallyTask} className='text-blue-600 pt-5 pr-5 ' icon={faX} />
                </div>                
                <p className='pl-5 pr-5'> { taskDescription } </p>  
            </div>
        </motion.div>
    );
}