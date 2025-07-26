import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserCard } from './user'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting() {
    const name = 'Juanex'
    return <h1>Hello world {name}</h1>
}

root.render(<>
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
