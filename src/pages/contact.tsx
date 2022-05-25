import React from 'react';
import NavBar from '../components/layout/navBar';
import Footer from '../components/layout/footer';
import Contact from '../components/landing/contact';
import Head from 'next/head';
const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<NavBar />
			<Contact />
			<Footer />
		</>
	);
};

export default ContactPage;
