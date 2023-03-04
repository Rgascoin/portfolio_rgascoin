import React from 'react';
import NavBar from '../components/layout/navBar';
import Footer from '../components/layout/footer';

import Link from 'next/link';
import { postsList } from '../../lib/notion';
import { NextPage } from 'next';
import Head from 'next/head';

interface PostInterface {
	id: string;
	properties: {
		Thumbnail?: {
			url: string;
		};
		Tags?: {
			multi_select: {
				name: string;
			}[];
		};
		Title?: {
			title: {
				plain_text: string;
			}[];
		};
		Description?: {
			rich_text: {
				plain_text: string;
			}[];
		};
		AuthorPic?: {
			url: string;
		};
		AuthorLink?: {
			url: string;
		};
		Author?: {
			rich_text: {
				plain_text: string;
			}[];
		};
		Date?: {
			date: {
				start: string;
			};
		};
		ReadTime?: {
			rich_text: {
				plain_text: string;
			}[];
		};
	};
}

interface Props {
	posts: [PostInterface];
}

const ContactPage: NextPage<Props> = (props: Props) => {
	const pickTagColor = (type: string) => {
		const mapping = {
			Article: 'bg-indigo-600',
			Freelance: 'bg-orange-500',
			Association: 'bg-teal-500',
			Discover: 'bg-blue-500',
			Tuto: 'bg-green-600',
		};

		return mapping[type as keyof typeof mapping];
	};

	return (
		<>
			<Head>
				<title>Rgascoin</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<NavBar />
			<div className="relative bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
				<div className="absolute inset-0">
					<div className="bg-gray-900 h-1/3 sm:h-2/3" />
				</div>
				<div className="relative max-w-7xl mx-auto">
					<div className="text-center">
						<h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
							Discover my projects.
						</h2>
						<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-200 sm:mt-4">
							From my experimentation with techniques and languages to my professional services.
						</p>
					</div>
					<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
						{props.posts &&
							props.posts.map((result: PostInterface) => {
								return (
									<div
										key={result.id}
										className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in"
									>
										<div className="flex-shrink-0">
											<img
												className="h-48 w-full object-cover"
												src={result.properties.Thumbnail && result.properties.Thumbnail.url}
												alt=""
											/>
										</div>
										<div className="flex-1 bg-gray-700 p-6 flex flex-col justify-between">
											<div className="flex-1">
												<div className="flex space-x-1">
													{result.properties.Tags &&
														result.properties.Tags.multi_select.map((el: any) => {
															let color = pickTagColor(el.name);
															if (!color) color = 'bg-gray-800';
															return (
																<p
																	key={el.name}
																	className={
																		`text-xs rounded-xl font-medium text-white p-1 px-2 ` +
																		color
																	}
																>
																	<Link href={`/projets/${result.id}`}>
																		{el.name}
																	</Link>
																</p>
															);
														})}
												</div>
												<Link href={`/projets/${result.id}`}>
													<a href={'#'} className="block mt-2">
														<p className="text-xl font-semibold text-white">
															{result.properties.Title?.title[0].plain_text}
														</p>
														<p className="mt-3 text-base text-gray-200">
															{result.properties.Description?.rich_text[0].plain_text}
														</p>
													</a>
												</Link>
											</div>
											<div className="mt-6 flex items-center">
												<div className="flex-shrink-0">
													<span className="sr-only">img</span>
													<img
														className="h-10 w-10 rounded-full"
														src={result.properties.AuthorPic?.url}
														alt="author"
													/>
												</div>
												<div className="ml-3">
													<p className="text-sm font-medium text-white">
														<Link
															href={
																result.properties.AuthorLink
																	? result.properties.AuthorLink.url
																	: ''
															}
														>
															<a href={'#'} className="hover:underline">
																{result.properties.Author?.rich_text[0].plain_text}
															</a>
														</Link>
													</p>
													<div className="flex space-x-1 text-sm text-gray-200">
														<time dateTime={result.properties.Date?.date.start}>
															{result.properties.Date?.date.start}
														</time>
														<span aria-hidden="true">&middot;</span>
														<span>
															{result.properties.ReadTime?.rich_text[0].plain_text}
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export async function getServerSideProps() {
	console.log(process.env.NOTION_KEY);
	// Get the posts
	const { results } = await postsList();
	// Return the result
	return {
		props: {
			posts: results,
		},
	};
}

export default ContactPage;
