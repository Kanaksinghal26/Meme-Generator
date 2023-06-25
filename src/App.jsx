import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Forms from './components/Forms/Forms'
import Output from './components/Output/Output'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='container'>
			<Header />
			<Forms />
			<Output />
		</div>
	)
}

export default App
