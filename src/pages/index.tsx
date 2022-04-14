import React from 'react';
import NavBar from '../components/layout/navBar';
import Hero from '../components/landing/hero';
import Features from '../components/landing/features';
import Pricing from '../components/landing/pricing';
import Footer from '../components/layout/footer';

const Index = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<Features />
			<Pricing />
			<Footer />
		</>
	);
};

export default Index;
