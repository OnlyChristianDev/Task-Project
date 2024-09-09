import React from 'react';
import { motion } from 'framer-motion';

interface FinallyTasksProps {
    taskName: string;
    taskDescription: string;
}

export default function FinallyTasks( { taskName, taskDescription }: FinallyTasksProps) {
    return (
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="fixed z-[9999] flex items-center justify-center"
    > 
            <div className="h-56 rounded-md w-[500px] cursor-pointer bg-[#F2F4F7]">
                <h1 className='font-bold'> { taskName } </h1>
                <p> { taskDescription } </p>  
            </div>
        </motion.div>
    );
}