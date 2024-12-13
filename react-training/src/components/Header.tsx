import { AppBar } from "@mui/material"
import { NavLink } from "react-router-dom"

export default function Header() {
	return (
		<AppBar position="static">
			<div className="flex flex-row items-center justify-between py-2 px-3">
				<div className="flex flex-row gap-4 items-center justify-between">
					<NavLink to="/" className="pr-5">
						<div className="flex flex-row items-center gap-2">
							<span className="sm:text-2xl">Nazarov</span>
						</div>
					</NavLink>
					<NavLink to="game">Tic Tac Toe</NavLink>
					<NavLink to="tasks">Tasks</NavLink>
					<NavLink to="sex">Sex</NavLink>
				</div>
				<NavLink to="login">Login</NavLink>
			</div>
		</AppBar>
	)
}
