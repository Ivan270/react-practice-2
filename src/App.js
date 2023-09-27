import React from 'react';
import AddUser from './Components/AddUser/AddUser';
import UsersList from './Components/UserList/UsersList';
import ErrorModal from './Components/ErrorModal/ErrorModal';

const users = [];

function App() {
	return (
		<div>
			<AddUser />
			{/* Conditional render, else Alert */}
			<UsersList />
		</div>
	);
}

export default App;
