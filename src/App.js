import React, { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
import UsersList from './Components/UserList/UsersList';
import ErrorModal from './Components/ErrorModal/ErrorModal';

function App() {
	const [users, setUsers] = useState([]);
	const [modalShow, setModalShow] = useState('none');
	const [modalTitle, setModalTitle] = useState('Error');
	const [modalDescription, setModalDescription] =
		useState('Something happened');

	const addUserHandler = (uName, uAge) => {
		// Validation
		if (uName === '' || uAge === '') {
			setModalShow('block');
			setModalTitle('Invalid Input');
			setModalDescription(
				'Please enter a valid name and age (non-empty values)'
			);
		} else if (uAge < 0) {
			setModalShow('block');
			setModalTitle('Invalid age');
			setModalDescription('Please enter a valid age (>0).');
		} else {
			// const user = {
			// 	...userInput,
			// 	id: Math.random().toString(36).substring(2),
			// };
			// const array = [...users, user];
			// setUsers(array);
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

	const dismissModal = (disp) => {
		setModalShow(disp);
	};

	let content = '';
	if (users.length > 0) {
		content = <UsersList data={users} />;
	}

	return (
		<div>
			<ErrorModal
				title={modalTitle}
				description={modalDescription}
				onModalClick={dismissModal}
				display={{ display: modalShow }}
			/>
			<AddUser onSubmitUser={addUserHandler} />
			{/* Conditionally render list of users*/}
			{content}
		</div>
	);
}

export default App;
