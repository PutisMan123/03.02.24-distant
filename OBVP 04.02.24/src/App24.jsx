import './App.css'

function App() {
  const num1 = 3;
  const num2 = 2;
  const name = 'john';
	const surname = 'smit';
  const num = 4;
  return (
    <>
      <div>
        result: {num1 ** num2}<br></br>{/*result выводит: 9*/}
        result: {name + ' ' + surname}<br></br>{/*result выводит: john smit*/}
        result: {Math.sqrt(num)}<br></br>{/*result: 2 извлечение квадратного корня при помощи sqrt*/}
      </div>
    </>
  )
}

export default App
