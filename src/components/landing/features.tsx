import { SparklesIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Features() {
	return (
		<div className="relative bg-white pt-16 pb-32 overflow-hidden">
			<div className="relative">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
					<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
						<div>
							<div>
								<img
									className="h-12 w-12 rounded-md flex items-center justify-center "
									src="https://cdn.svgporn.com/logos/metamask-icon.svg"
									alt="Workcation"
								/>
							</div>
							<div className="mt-6">
								<h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
									Vos solutions NFT clès en main
								</h2>
								<p className="mt-4 text-lg text-gray-500">
									Vous souhaitez réaliser un projet NFT ? Que ce soit pour de l&amp;audit ou réaliser
									votre demande n&amp;hésitez plus et prenez contact pour discuter de votre projet
									maintenant
								</p>
								<div className="mt-6">
									<Link href={'/contact'}>
										<a
											href="#"
											className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
										>
											Prendre contact
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="mt-8 border-t border-gray-200 pt-6">
							<blockquote>
								<div>
									<p className="text-base text-gray-500">
										&ldquo;Travailler avec Roman est un plaisir. Toujours courtoi et professionnel,
										il nous tient réguliérement au courrant de ses avancés sur notre projet.&rdquo;
									</p>
								</div>
								<footer className="mt-3">
									<div className="flex items-center space-x-3">
										<div className="flex-shrink-0">
											<img
												className="h-6 w-6 rounded-full"
												src="https://pbs.twimg.com/profile_images/1511003519477850115/_MxF6kbi_400x400.png"
												alt=""
											/>
										</div>
										<div className="text-base font-medium text-gray-700">
											Madeiro, Business manager at Kazoku
										</div>
									</div>
								</footer>
							</blockquote>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 lg:mt-0">
						<div className="pl-4 lg:px-0 lg:m-0 lg:relative lg:h-full">
							<img
								className="w-full rounded-xl shadow-md lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
								src="nftDesign.gif"
								alt="Inbox user interface"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-24">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
					<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
						<div>
							<div>
								<img
									className="h-12 w-12 rounded-md flex items-center justify-center "
									src="https://cdn.svgporn.com/logos/chrome.svg"
									alt="Workcation"
								/>
							</div>
							<div className="mt-6">
								<h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
									Des front-end réalisés sur mesure
								</h2>
								<p className="mt-4 text-lg text-gray-500">
									Envie de mettre en avant votre business ? Je peux vous proposez des solutions
									techniques et pratique selon vos besoins.
								</p>
								<div className="mt-6">
									<Link href={'/contact'}>
										<a
											href="#"
											className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
										>
											Prendre contact
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
						<div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
							<img
								className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
								src="salafront.png"
								alt="Customer profile user interface"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
