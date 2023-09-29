import React, { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
import UsersList from './Components/UserList/UsersList';
import ErrorModal from './Components/ErrorModal/ErrorModal';
import Wrapper from './Components/Helpers/Wrapper';

function App() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState();

	const addUserHandler = (uName, uAge) => {
		// Validation
		if (uName === '' || uAge === '') {
			setError({
				title: 'Invalid Input',
				description: 'Please enter a valid name and age (non-empty values)',
			});
		} else if (uAge < 1) {
			setError({
				title: 'Invalid age',
				description: 'Please enter a valid age (>0).',
			});
		} else {
			setUsers((prevUsers) => {
				return [
					...prevUsers,
					{
						username: uName,
						age: uAge,
						id: Math.random().toString(36).substring(2),
					},
				];
			});
		}
	};

	const dismissModal = () => {
		setError(undefined);
	};

	let content = '';
	if (users.length > 0) {
		content = <UsersList data={users} />;
	}

	return (
		<Wrapper>
			{error && (
				<ErrorModal
					title={error.title}
					description={error.description}
					onModalClick={dismissModal}
				/>
			)}
			<AddUser onSubmitUser={addUserHandler} />
			{/* Conditionally render list of users*/}
			{content}
		</Wrapper>
	);
}

export default App;
