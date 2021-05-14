import React, {Component} from 'react';
import CPContactInfoSection from "./CPContactInfoSection";
import CPContactFormSection from "./CPContactFormSection";
import MapGoogle from './mapgoogle';

class ContactsMain extends Component {
	render() {
		return (
			<main>
				{/* cta-start */}
				<CPContactInfoSection/>
				{/* cta-end */}

				{/* cta-start */}
				<CPContactFormSection/>
				{/* cta-end */}

				{/* cta-start */}
				{/* <CPMapSection/> */}
				<MapGoogle />
				{/* cta-end */}
			</main>
		);
	}
}

export default ContactsMain;