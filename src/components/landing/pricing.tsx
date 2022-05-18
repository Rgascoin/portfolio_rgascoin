import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/solid';

const includedFeatures = [
	'Des missions réalisées pour 6 clients',
	"Direction d'un pôle de R&D",
	'Formation dans une école reconnue',
	'Des pipelines et process stricts',
];

export default function Pricing() {
	return (
		<div className="bg-gray-100">
			<div className="pt-12 sm:pt-16 lg:pt-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
							De la transparence avant tout
						</h2>
						<p className="mt-4 text-xl text-gray-600">
							Pourquoi pouvez-vous me faire confiance pour réussir votre projet
						</p>
					</div>
				</div>
			</div>
			<div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
				<div className="relative">
					<div className="absolute inset-0 h-1/2 bg-gray-100" />
					<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
							<div className="flex-1 bg-white px-6 py-8 lg:p-12">
								<h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
									Forgé par l&apos;experience
								</h3>
								<p className="mt-6 text-base text-gray-500">
									Ayant suivi une formation très complète, je suis polyvalent et sais m&apos;adapter à
									de nombreuses situations et technologies.
								</p>
								<div className="mt-8">
									<div className="flex items-center">
										<h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
											Les points clés
										</h4>
										<div className="flex-1 border-t-2 border-gray-200" />
									</div>
									<ul
										role="list"
										className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
									>
										{includedFeatures.map((feature) => (
											<li key={feature} className="flex items-start lg:col-span-1">
												<div className="flex-shrink-0">
													<CheckCircleIcon
														className="h-5 w-5 text-green-400"
														aria-hidden="true"
													/>
												</div>
												<p className="ml-3 text-sm text-gray-700">{feature}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
								<p className="text-lg leading-6 font-medium text-gray-900">mes prix</p>
								<div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
									<span>550€</span>
									<span className="ml-3 text-xl font-medium text-gray-500">/Jour</span>
								</div>
								<p className="mt-4 text-sm">
									<a className="font-medium text-gray-500 underline">Status auto-entrepreneur</a>
								</p>
								<div className="mt-6">
									<div className="rounded-md shadow">
										<Link href={'/contact'}>
											<a
												href="#"
												className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
											>
												Prendre contact
											</a>
										</Link>
									</div>
								</div>
								<div className="mt-4 text-sm">
									<a href="#" className="font-medium text-gray-900">
										Prix négociable
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
