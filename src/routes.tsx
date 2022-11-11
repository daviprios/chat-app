import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Lobby from './views/Lobby'
import Room from './views/Room'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/'>
					<Route index element={<Lobby />} />
					<Route path='/:room' element={<Room />} />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
