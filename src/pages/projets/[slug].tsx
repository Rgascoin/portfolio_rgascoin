import { NextPage } from 'next';
import { NotionRenderer } from 'react-notion-x';
import Head from 'next/head';
import { getPost, postsList } from '../../../lib/notion';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import NavBar from '../../components/layout/navBar';
import Footer from '../../components/layout/footer';
import React from 'react';

interface Props {
	page: any;
}

const Post: NextPage<Props> = (props: any) => {
	const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m: any) => m.Code));

	return (
		<>
			<Head>
				<title>Rgascoin</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<NavBar />
			<NotionRenderer
				recordMap={props.page}
				components={{
					Code,
					nextImage: Image,
					nextLink: Link,
				}}
				fullPage={true}
				darkMode={true}
				disableHeader={true}
				hideBlockId={true}
			/>
			<Footer />
		</>
	);
};

export async function getStaticPaths() {
	const { results } = await postsList();

	const paths = results.map((post) => ({
		params: { slug: post.id },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
	// Get the posts
	const recordMap = await getPost(params.slug);

	// Return the result
	return {
		props: {
			page: recordMap,
		},
		revalidate: 86400,
	};
}

export default Post;
