import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserCard } from './user'
import { Button } from './Button'
import { TaskCard } from './Task'
import { Posts } from './Posts'
import { Counter } from './Counter'

const root = ReactDOM.createRoot(document.getElementById('root'))

const users = [
    {
        id: 1,
        name: 'Noelia Guevara',
        imagen: 'https://robohash.org/user1'
    },
    {
        id: 2,
        name: 'Esmeralda Guevara',
        imagen: 'https://robohash.org/user2'
    },
    {
        id: 3,
        name: 'Juan Guevara',
        imagen: 'https://robohash.org/user3'
    }
]


root.render(<>

    <Counter />
    <hr />
    {users.map((user, i) => {
        return (
            <div key={i}>
                <h1>{user.name}</h1>
                <img src={user.imagen} alt={user.name} />
            </div>
        )
    })}
    <br />

    <Posts />
    <br />
    <button onClick={(e) => {
        console.log('Diste click');

    }}>Click me</button>

    <input onChange={(e) => {
        console.log(e.target.value)
    }}></input>

    <br />
    <form onSubmit={(e) => {
        e.preventDefault()
        console.log("Se enviaron los datos")
    }}>
        <h1>Registro de usuario</h1>
        <button>Send</button>
    </form>

    <br />
    <TaskCard ready={false} />

    <br />
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
