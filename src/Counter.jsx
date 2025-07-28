import { useEffect, useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('render')
    }, [counter])

    return (
        <div>
            <h1>Counter:{counter} </h1>
            <button onClick={() => {
                setCounter(counter + 1)
            }} >
                Sumar
            </button>
            <button onClick={() => {
                setCounter(counter - 1)
            }} >
                Restar
            </button>
            <button onClick={() => {
                setCounter(0)
            }} >
                Reiniciar
            </button>
        </div>
    )
}