import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onModalClick} />;
};
const ModalOverlay = (props) => {
	return (
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
	);
};

const ErrorModal = (props) => {
	return (
		<React.Fragment>
			{/* createPortal takes 2 parameters: 1. A React Node or children and a pointer to the container element, in this case a div with a specific ID.*/}
			{ReactDOM.createPortal(
				<Backdrop onModalClick={props.onModalClick} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					description={props.description}
					onModalClick={props.onModalClick}
				/>,
				document.getElementById('overlay-root')
			)}
		</React.Fragment>
	);
};

export default ErrorModal;
