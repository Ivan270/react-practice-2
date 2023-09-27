import React, { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
import UsersList from './Components/UserList/UsersList';

function App() {
	const [users, setUsers] = useState([]);

	const addUserHandler = (userInput) => {
		const user = {
			...userInput,
			id: Math.floor(Math.random() * 5),
		};
		const array = [...users, user];
		setUsers(array);
	};

	let content = '';
	if (users.length > 0) {
		content = <UsersList data={users} />;
	}

	return (
		<div>
			<AddUser onSubmitUser={addUserHandler} />
			{/* Conditional render*/}
			{content}
		</div>
	);
}

export default App;
