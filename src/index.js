import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserCard } from './user'
import { Button } from './Button'
import { TaskCard } from './Task'
import { Posts } from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting() {
    const name = 'Juanex'
    return <h1>Hello world {name}</h1>
}

root.render(<>

    <Posts />

    <button onClick={(e) => {
        console.log('Diste click');

    }}>Click me</button>

    <input onChange={(e) => {
        console.log(e.target.value)
    }}></input>

    <form onSubmit={(e) => {
        e.preventDefault()
        console.log("Se enviaron los datos")
    }}>
        <h1>Registro de usuario</h1>
        <button>Send</button>
    </form>

    <TaskCard ready={false} />

    <Button text='Click me' />
    <Button text='Pay' />
    <Button text='Go to' name='Juanex' />
    <UserCard
        name="Juan Guevara"
        amount={3000}
        married={true}
        points={[99, 33.3, 22.2]}
        address={{ street: "123 Main Street", city: "New York" }}
        greet={function () { alert('Hello') }}
    />

    <UserCard
        name="Esmeralda Guevara"
        amount={1000}
        married={false}
        points={[99, 33.3, 22.2]}
        address={{ street: "123 Main Street", city: "New York" }}
        greet={function () { alert('Hello') }}
    />
</>
)
