import './App.css'

function App() {
  const obj = { name: 'john', surname: 'smit' };
  return (
    <>
      <div>
        <p>
          name:    <span>{obj.name}</span>, <br></br>
          surname: <span>{obj.surname}</span>,
        </p>
      </div>
    </>
  )
}

export default App
