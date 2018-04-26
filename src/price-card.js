// @jsx h

import { props, withComponent } from 'skatejs';
import withPreact from '@skatejs/renderer-preact';
import { h } from 'preact';

import device from './images/device.svg';
import laptop from './images/laptop.svg';
import monitor from './images/monitor.svg';

const images = {
	device,
	laptop,
	monitor
};

const styles = {
    card: {
        background: 'white',
        height: '100%',
        marginTop: '2rem'
    },
    image: {
        width: 75,
        height: 75,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        margin: 'auto'
    },
    title: {
        color: '#5675d7',
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: 3,
        marginTop: '1.75rem'
    },
    desc: {
        color: '#b4b3b3',
        fontSize: 13,
        width: '68%',
        margin: 'auto',
        fontWeight: 700,
        padding: 15
    },
    priceMain: {
		color: '#5675d7',
		fontWeight: 600,
		marginTop: '0.5rem'
	},
	price: {
		fontSize: 30
	},
	time: {
		fontSize: 12
	},
	dollar: {
		fontSize: 14,
		top: -14,
		position: 'relative',
	}
};

class PriceCard extends withComponent(withPreact()) {
    static get props() {
        return {
            title: props.string,
            desc: props.string,
            img: props.string,
            price: props.string
        };
	}
	constructor() {
		super();
	}
    render({ title, desc, img, price }) {
		const imageStyles = Object.assign({ backgroundImage: `url(${images[img]})` }, styles.image);
        return (
            <div style={styles.card}>
                <div style={imageStyles} />
                <div style={styles.title}>{title}</div>
                <div style={styles.desc}>{desc}</div>
                <div style={styles.priceMain}>
                    <span style={styles.dollar}>$</span>
                    <span style={styles.price}>{price}</span>
                    <span style={styles.time}>/ month</span>
                </div>
            </div>
        );
    }
}

customElements.define('price-card', PriceCard);
