import { SparklesIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Features() {
	return (
		<div className="relative bg-gray-900 pt-16 pb-32 overflow-hidden">
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
								<h2 className="text-3xl font-extrabold tracking-tight text-white">
									Vos solutions NFT clés en main
								</h2>
								<p className="mt-4 text-lg text-gray-200">
									Vous souhaitez réaliser un projet NFT ? Que ce soit pour de l&apos;audit ou réalisé
									votre demande n&apos;hésitez plus et prenez contact pour discuter de votre projet
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
									<p className="text-base text-gray-300">
										&ldquo;Travailler avec Roman est un plaisir. Toujours courtois et professionnel,
										il nous tient régulièrement au courant de ses avancés sur notre projet.&rdquo;
									</p>
								</div>
								<footer className="mt-3">
									<div className="flex items-center space-x-3">
										<div className="flex-shrink-0">
											<img
												className="h-6 w-6 rounded-full"
												src="https://lh3.googleusercontent.com/V3UoPZaHEccDORF8gxF2vgAfwHxWxldyLfNgidPF5twZ-73ZyRbAZJ1ZmYYAVf8ime9_-GgV8aD-9ydZ42U0u1lP2MD-_jh8wJ3diLE=w335"
												alt=""
											/>
										</div>
										<div className="text-base font-medium text-gray-400">
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
								className="w-full rounded-xl lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
								src="https://lh3.googleusercontent.com/OEX34MvGkDcbuxbwdSg1_Bhc2XiODdzIrE60ujWw5bHwQyrTesKol6-sLCzRji43rrGeSW4ua1yUexPT4AizoXnN3njOC2jfpgqLOg=w600"
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
								<h2 className="text-3xl font-extrabold tracking-tight text-white">
									Des front-end réalisés sur mesure
								</h2>
								<p className="mt-4 text-lg text-gray-200">
									Envie de mettre en avant votre business ? Je peux vous proposer des solutions
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
