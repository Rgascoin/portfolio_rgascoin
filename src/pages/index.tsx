import React from 'react';
import NavBar from '../components/layout/navBar';
import Hero from '../components/landing/hero';
import Features from '../components/landing/features';
import Pricing from '../components/landing/pricing';
import Footer from '../components/layout/footer';
import Head from 'next/head';

const Index = () => {
	return (
		<div className={'bg-gray-900'}>
			<Head>
				<title>Rgascoin</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Découvrez mes projets et mes préstations !" />
			</Head>
			<NavBar />
			<Hero />
			<Features />
			<Pricing />
			<Footer />
		</div>
	);
};

export default Index;
