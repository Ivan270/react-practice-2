import React from 'react';
import Card from '../Card/Card';
import styles from './UsersList.module.css';

const UserList = (props) => {
	return (
		<Card>
			<div className={styles.users}>
				<ul>
					{props.data.map((user) => {
						return (
							<li key={user.id}>
								{user.username} ({user.age})
							</li>
						);
					})}
				</ul>
			</div>
		</Card>
	);
};
export default UserList;
