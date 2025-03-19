import { Route, Routes } from 'react-router'
import Home from '@/pages/home'
import AppLayout from './app-layout'
import ProtectedRoute from './protected-route'
import PublicRoute from './public-route'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/'>
				<Route index element={<Home />} />

				<Route element={<PublicRoute />}></Route>

				<Route element={<ProtectedRoute />}>
					<Route element={<AppLayout />}></Route>
				</Route>
			</Route>
		</Routes>
	)
}

export default AppRouter
