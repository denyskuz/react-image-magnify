import React, { Component } from 'react';
import ReactImageMagnify from '../pkg-lnk/ReactImageMagnify';

import './app.css';

import watchImg from '../images/wristwatch_1200.jpg';

export default class extends Component {
    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        largeImage: {
                            alt: '',
                            src: watchImg,
                            width: 1200,
                            height: 1800
                        },
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            src: watchImg,
                            width: 300,
                            height: 450
                        },
                        isHintEnabled: true
                    }} />
                </div>
                <div className="fixed__instructions">
                    <h3>Fixed Width Small Image Example</h3>
                    <p>Specify small image width and height as numbers</p>
                    <p>Small image is not fluid width.</p>
                </div>
                <div style={{height: '1000px'}} />
            </div>
        );
    }
}
