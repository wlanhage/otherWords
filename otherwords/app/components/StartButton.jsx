

export default function StartButton ({buttonText}) {



    return (
        <>
        <button className="w-auto h-auto p-7 bg-green-600 border-4 border-green-700 rounded-3xl">
            <h1 className="font-bold text-3xl">{buttonText}</h1>
        </button>
        
        </>
    )
}