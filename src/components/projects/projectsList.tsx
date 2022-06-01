/* This example requires Tailwind CSS v2.0+ */
import { NextPage } from 'next';

import Link from 'next/link';
import { postsList } from '../../../lib/notion';

interface Props {
	posts: [any];
}

const ProjectsList: NextPage<Props> = (props: any) => {
	console.log(props);
	return (
		<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div className="absolute inset-0">
				<div className="bg-white h-1/3 sm:h-2/3" />
			</div>
			<div className="relative max-w-7xl mx-auto">
				<div className="text-center">
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
						Découvrez mes projets
					</h2>
					<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
						De mes essaies sur des techniques et languages à mes prestations professionnelles
					</p>
				</div>
				<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					{props.posts &&
						props.posts.map((result: any, index: any) => {
							return (
								<div key={index}>
									<div>
										<Link href={`/posts/${result.id}`}>
											<a>{result.properties.Name.title[0].plain_text}</a>
										</Link>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export async function getServerSideProps() {
	// Get the posts
	const { results } = await postsList();
	console.log(results);
	// Return the result
	return {
		props: {
			posts: results,
		},
	};
}

export default ProjectsList;
