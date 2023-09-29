import React from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
	return (
		<React.Fragment onClick={props.onModalClick} className={styles.backdrop}>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={styles.content}>
					<p>{props.description}</p>
				</div>
				<div className={styles.actions}>
					<Button onClick={props.onModalClick}>Okay</Button>
				</div>
			</Card>
		</React.Fragment>
	);
};

export default ErrorModal;
