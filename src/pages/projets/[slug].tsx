import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import { NotionRenderer } from 'react-notion-x';
import Head from 'next/head';
import { getPost, postsList } from '../../../lib/notion';

import NavBar from '../../components/layout/navBar';
import Footer from '../../components/layout/footer';
import React from 'react';

interface Props {
	page: any;
}

const Post: NextPage<Props> = (props: any) => {
	return (
		<>
			<Head>
				<title>Rgascoin</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<NavBar />
			<NotionRenderer
				recordMap={props.page}
				fullPage={true}
				darkMode={false}
				disableHeader={true}
				hideBlockId={true}
			/>
			<Footer />
		</>
	);
};

export async function getServerSideProps(context: any) {
	const { slug } = context.query;

	// Get the posts
	const recordMap = await getPost(slug);

	// Return the result
	return {
		props: {
			page: recordMap,
		},
	};
}

export default Post;
