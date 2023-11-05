import React, { useState } from "react";
import { Button, Card, Carousel, Modal } from "react-bootstrap";
import "./style.css";

const ProductCard = ({ title, description, images }) => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	if (!Array.isArray(images)) images = [images];

	return (
		<div className="product-card">
			<Card>
				<Carousel>
					{images.map((image, index) => (
						<Carousel.Item key={index}>
							<img
								className="d-block w-100"
								src={image}
								alt={`Slide ${index}`}
							/>
						</Carousel.Item>
					))}
				</Carousel>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>
						{description.length > 100
							? `${description.slice(0, 100)}...`
							: description}
					</Card.Text>
					<Button className="moreInformation" onClick={handleShowModal}>
						Saiba mais
					</Button>
				</Card.Body>
			</Card>

			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Carousel>
						{images.map((image, index) => (
							<Carousel.Item key={index}>
								<img
									className="d-block w-100"
									src={image}
									alt={`Slide ${index}`}
								/>
							</Carousel.Item>
						))}
					</Carousel>
					<p>{description}</p>
					<Button variant="primary">Adquirir</Button>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ProductCard;
