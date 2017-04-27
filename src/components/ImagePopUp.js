import React from 'react';
import { getImageUrl } from '../utils.js';

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
        const { farm, server, id, secret  } = this.props.image;
        return (
            <div className="pop-up-container" onClick={this.props.onHide}>
                <img src={getImageUrl(farm, server, id, secret)} alt='' style={{marginTop:'140px'}} onClick={this.onImageClick}/>
                {
                    this.state.showMeta &&
                    <ul className="image-metadata">
                        <li>ImageId: {id}</li>
                        <li>FarmId: {farm}</li>
                        <li>ServerId: {server}</li>
                        <li>SecretId: {secret}</li>
                    </ul>
                }
            </div>
        );
    }
}
