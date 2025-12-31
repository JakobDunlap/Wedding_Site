import './Content.css'
import logo from './logo.svg';

const Content = () => {

  const handleClick = () => {
    console.log('Button clicked')
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }
  const handleClick3 = (e) => {
    console.log(e)
  }

  return (
    <main>
        <header className="App-content">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              This is a paragraph lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button onClick={handleClick}>Click Here</button>
            <button onClick={() => handleClick2}>Click Here</button>
            <button onClick={(e) => handleClick3(e)}>Click Here</button>
        </header>
    </main>
  )
}

export default Content