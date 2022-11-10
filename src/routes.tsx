import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Chat from './views/Chat'
import Lobby from './views/Lobby'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/'>
					<Route index element={<Lobby />} />
					<Route path='/:room' element={<Chat />} />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
