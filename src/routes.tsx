import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Lobby from '@/views/Lobby'
import Room from '@/views/Room'
import paths from '@/utils/paths'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route>
					<Route path={paths.lobby} element={<Lobby />} />
					<Route path={paths.room} element={<Room />} />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
