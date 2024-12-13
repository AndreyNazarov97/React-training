import { createTheme } from "@mui/material"
import { cyan } from "@mui/material/colors"

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			light: cyan[400],
			main: cyan[500],
			dark: cyan[600],
			contrastText: "#fff",
		},
	},
})
