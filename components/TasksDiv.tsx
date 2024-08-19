interface TasksDivProps {
    tittle: string;
}

export default function TasksDiv({ tittle } : TasksDivProps){   
    return(
        <>
            <div className="bg-white p-3 shadow-2xl h-[500px] rounded-lg w-96">
                <div className="p-2">
                    <h1 className="font-medium">{tittle}</h1>
                </div>
                <div>
                    <div className="bg-[#F2F4F7] border-gray-200 border-solid border-2 h-32 flex items-center justify-center rounded-lg"> </div>
                    <div className="bg-[#F2F4F7] mt-5 h-32 flex items-center justify-center rounded-lg  border-gray-200 border-solid border-2"> </div>
                    <div className="bg-[#F2F4F7] mt-5  h-32 flex items-center justify-center rounded-lg  border-gray-200 border-solid border-2"> </div>
                </div>
            </div>
        </>
    )
}