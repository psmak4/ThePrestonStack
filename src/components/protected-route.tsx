import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import { Outlet } from 'react-router'

const ProtectedRoute = () => {
	return (
		<>
			<SignedIn>
				<Outlet />
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</>
	)
}

export default ProtectedRoute
