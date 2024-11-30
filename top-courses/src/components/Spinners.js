

function Spinner(){
    return(
        <div className="flex flex-col gap-2 items-center space-y-2 bg-gradient-to-r from-red-500 to-orange-500 h-screen">
            <div className="w-spinner h-spinner border-spinner border-double border-l-solid border-l-white rounded-full animate-spinner">
            </div>
            <p className="text-lg font-bold">Loading...</p>
        </div>
    )
}

export default Spinner;