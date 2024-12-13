import { Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"

type LoginFields = {
	email: string
	password: string
}

export default function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFields>()

	const onSubmit = (data: LoginFields) => {
		console.log(data)
	}

	return (
		<div className="flex flex-col h-full w-full py-6 px-10 justify-center items-start gap-4">
			<NavLink to="/" className="text-lg">
				Main page
			</NavLink>

			<div className="flex flex-col flex-1 min-w-80 mx-auto items-center justify-center gap-9">
				<form
					className="flex flex-col w-full items-center gap-7"
					onSubmit={handleSubmit(onSubmit)}
				>
					<TextField
						{...register("email", {
							required: "Email is required",
							validate: (value) => {
								if (!value.includes("@")) {
									return "Email must contain @"
								}
							},
						})}
						label="Email"
						error={!!errors.email}
						helperText={errors.email?.message}
						variant="standard"
						fullWidth
					/>
					<TextField
						{...register("password")}
						variant="standard"
						label="Password"
						fullWidth
					/>
					<Button type="submit" variant="contained">
						Login
					</Button>
				</form>
			</div>
		</div>
	)
}
