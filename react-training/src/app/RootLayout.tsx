import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { ContentBlock } from "../components/ContentBlock"
import Header from "../components/Header"

export type Props = {
	children: React.ReactNode
}

export default function RootLayout() {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<main className="flex flex-col flex-1 px-2 sm:px-8 py-2 sm:py-5">
				<ContentBlock>
					<Outlet />
				</ContentBlock>
			</main>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	)
}
