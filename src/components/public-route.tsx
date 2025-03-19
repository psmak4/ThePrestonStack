import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { Location, Navigate, Outlet, useLocation } from 'react-router'

const PublicRoute = () => {
	const location = useLocation()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const getRedirectUrl = ({ state }: Location<any>) => {
		if (state && state.from && state.from.pathname) return state.from.pathname

		return '/'
	}

	return (
		<>
			<SignedIn>
				<Navigate to={getRedirectUrl(location)} />
			</SignedIn>
			<SignedOut>
				<Outlet />
			</SignedOut>
		</>
	)
}

export default PublicRoute
