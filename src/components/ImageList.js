import React from "react";
import { getImageUrl } from "../utils.js";

export default class ImageList extends React.Component {
	constructor(props) {
		super(props);
		this.onImageClick = this.onImageClick.bind(this);
	}

	onImageClick(idx) {
		this.props.onImageClick(idx);
	}

	renderImageItem(image, idx, onClick) {
		const { farm, server, id, secret } = image;
		return (
			<li key={idx} className="image-item" onClick={() => onClick(idx)}>
				<img src={getImageUrl(farm, server, id, secret)} alt="" width="300px" />
			</li>
		);
	}

	render() {
		return (
			<ul className="h-flex sb">
				{this.props.images.map((image, idx) => this.renderImageItem(image, idx, this.onImageClick))}
			</ul>
		);
	}
}
