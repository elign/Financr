const CircularButton = ({option, icon}) => {
    return (
        <div className="flex flex-col items-center gap-3">
            <button className="text-4xl font-semibold pt-1 rounded-full bg-primary drop-shadow-md w-20 h-20 hover:drop-shadow-none cursor-pointer">₹</button>
            <p className="text-secondary">{option}</p>
        </div>
    )
}

export {
    CircularButton,
}