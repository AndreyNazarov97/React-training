import { ThemeProvider } from "@mui/material"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./app/router.tsx"
import "./index.css"
import { darkTheme } from "./theme.ts"

createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={darkTheme}>
		<RouterProvider router={router} />
	</ThemeProvider>
)
