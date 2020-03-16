import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
	return (
		<div>
			<Header />
			<div className="container col-md-5">
				{/* <h3>สวัสดีค่ะ</h3> */}
				<p className="title text-justify mt-4 mb-4">
                    
                </p>
				<h4 className="text-success">Meaw Cha </h4>
				<p>In the design stage, Lorem Ipsum is actually useful as it focuses our attention on places where the content is a dynamic block coming from the CMS (unlike static content elements that will always remain the same). Lorem Ipsum blocks with a range of character counts provide an obvious reminder to check and check that the design and the content model match. It adds value to your content marketing design prototypes.</p>
			</div>
			<Footer company="Shop Company" email="siriporn.push@gmail.com" />
		</div>
	);
};

export default About;
