import "./header.css"

const Header = (props) => {
    return <header className="Header">
        <h1>Todos ({props.valueOne}/{props.valueTwo})</h1>
    </header>
}

export default Header