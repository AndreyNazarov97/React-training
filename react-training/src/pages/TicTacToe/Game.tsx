import { useState } from "react"
import Board from "./components/Board"

export default function Game() {
	const [history, setHistory] = useState<string[][]>([Array(9).fill("")])
	const [currentMove, setCurrentMove] = useState<number>(0)
	const xIsNext = currentMove % 2 === 0

	const currentSquares = history[currentMove]

	function handlePlay(nextSquares: string[]) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
		setHistory(nextHistory)
		setCurrentMove(nextHistory.length - 1)
	}

	function jumpTo(nextMove: number) {
		setCurrentMove(nextMove)
	}

	const moves = history.map((_, move) => {
		let description
		if (move > 0) {
			description = "Go to move #" + move
		} else {
			description = "Go to game start"
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		)
	})

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
			</div>
			<div className="game-info">
				<div className="game-info"> </div>
				<ol>{moves}</ol>
			</div>
		</div>
	)
}
