import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/Login/LoginPage"
import Game from "../pages/TicTacToe/Game"
import RootLayout from "./RootLayout"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "game",
				element: <Game />,
			},
			{
				path: "tasks",
				element: <div className="text-8xl text-center">tasks</div>,
			},
			{
				path: "sex",
				element: <div className="text-8xl text-center">SEX</div>,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
		],
		errorElement: <div className="text-8xl text-center text-white">404</div>,
	},
])
