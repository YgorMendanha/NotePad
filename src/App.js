import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notepad from './pages/Notepad'
import CreateAccount from './pages/CreateAccount'
import Restorepassword from './pages/Restorepassword'
import { AuthProvider } from './Context/AuthContext'

function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route exact path="/" element={<Notepad />} />
					<Route exact path="/createaccount" element={<CreateAccount />} />
					<Route
						exact
						path="/restorepassword/:IdUser"
						element={<Restorepassword />}
					/>
				</Routes>
			</AuthProvider>
		</Router>
	)
}

export default App
