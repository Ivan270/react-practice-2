import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './AddUser.module.css';
import { useRef } from 'react';

const AddUser = (props) => {
	// useRef hook takes a default value for initialization, in this case is not needed, it returns a value. For this case, I will no longer need useState nor the change event handler for each keystroke.
	// AKA 'Uncontrolled component' since React is not in control of the internal state
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const saveUserHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;
		props.onSubmitUser(enteredName, enteredAge);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};
	return (
		<Card className={styles.input}>
			<form onSubmit={saveUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" ref={nameInputRef}></input>
				<label htmlFor="age">Age</label>
				<input type="number" id="age" ref={ageInputRef}></input>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
