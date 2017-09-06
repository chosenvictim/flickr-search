import React from "react";
import { getImageUrl } from "../utils.js";

export default class PopUpImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMeta: false
		};
		this.onImageClick = this.onImageClick.bind(this);
	}

	onImageClick(evt) {
		evt.stopPropagation();
		this.setState({ showMeta: !this.state.showMeta });
	}

	render() {
		const { title, farm, server, id, secret } = this.props.image;
		return (
			<div className="image-popup-container" onClick={this.props.onHide}>
				<img
					className="popup-image"
					src={getImageUrl(farm, server, id, secret)}
					alt=""
					style={{ marginTop: "140px" }}
					onClick={this.onImageClick}
				/>
				{this.state.showMeta &&
					<ul className="image-metadata">
						<li style={{ margin: "5px 0" }}>
							Title: {title}
						</li>
						<li style={{ margin: "5px 0" }}>
							ImageId: {id}
						</li>
						<li style={{ margin: "5px 0" }}>
							FarmId: {farm}
						</li>
						<li style={{ margin: "5px 0" }}>
							ServerId: {server}
						</li>
						<li style={{ margin: "5px 0" }}>
							SecretId: {secret}
						</li>
					</ul>}
			</div>
		);
	}
}
