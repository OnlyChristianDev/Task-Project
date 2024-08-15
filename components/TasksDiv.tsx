export default function TasksDiv({ tittle }){   
    return(
        <>
            <div className="bg-white p-3 shadow-2xl h-[500px] rounded-lg w-96">
                <div className="p-2">
                    <h1 className="font-medium">{tittle}</h1>
                </div>
                <div>
                    <div className="bg-[#F2F4F7] h-32 flex items-center justify-center cursor-pointer rounded-lg"> </div>
                    <div className="bg-[#F2F4F7] mt-5 h-32 flex items-center justify-center cursor-pointer rounded-lg"> </div>
                    <div className="bg-[#F2F4F7] mt-5  h-32 flex items-center justify-center cursor-pointer rounded-lg"> </div>
                </div>
            </div>
        </>
    )
}