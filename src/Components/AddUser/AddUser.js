import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './AddUser.module.css';
import { useState } from 'react';

const AddUser = (props) => {
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');

	const usernameChangeHandler = (event) => {
		setUserName(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setUserAge(event.target.value);
	};

	const saveUserHandler = (event) => {
		event.preventDefault();
		props.onSubmitUser(userName, userAge);
		setUserName('');
		setUserAge('');
	};
	return (
		<Card className={styles.input}>
			<form onSubmit={saveUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					onChange={usernameChangeHandler}
					value={userName}
					id="username"
				></input>
				<label htmlFor="age">Age</label>
				<input
					onChange={ageChangeHandler}
					value={userAge}
					type="number"
					id="age"
				></input>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
