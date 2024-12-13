import axios from "axios"

const API_URL: string = "http://localhost:5288/api/"

export async function getUsers() {
	const response = await axios.get<string[]>(API_URL + "users")
	await new Promise((resolve) => setTimeout(resolve, 3000))
	const data = await response.data

	return data
}
