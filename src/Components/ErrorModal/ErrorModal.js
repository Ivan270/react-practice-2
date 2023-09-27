import React from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
	const modalClickHandler = () => {
		props.onModalClick('none');
	};

	return (
		<div
			onClick={modalClickHandler}
			style={props.display}
			className={styles.backdrop}
		>
			<div className={styles.modal}>
				<Card>
					<header className={styles.header}>
						<h2>{props.title}</h2>
					</header>
					<div className={styles.content}>
						<p>{props.description}</p>
					</div>
					<div className={styles.actions}>
						<Button onClick={modalClickHandler}>Okay</Button>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default ErrorModal;
