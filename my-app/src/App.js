import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			});
	}, []);

	return (
		<>
			{' '}
			<div className={styles.title}>Список дел:</div>
			<div className={styles.app}>
				{todos.map(({ id, title, completed }) => (
					<div key={id}>
						<input
							className={styles.checked}
							type="checkbox"
							checked={completed}
						/>
						{title}
					</div>
				))}
			</div>
		</>
	);
};
