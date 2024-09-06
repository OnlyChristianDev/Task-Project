import React from 'react';
import { motion } from 'framer-motion';

export default function FinallyTasks() {
    return (
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="fixed z-[9999] flex items-center justify-center"
    > 
            <div className="h-56 rounded-md w-[500px] cursor-pointer bg-[#F2F4F7]">
                <h1 className='font-bold'>wedqeq</h1>  
            </div>
        </motion.div>
    );
}