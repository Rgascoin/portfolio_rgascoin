import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

const mapping = [
	{
		name: 'Accueil',
		link: '/',
	},
	{
		name: 'Projets',
		link: '/projets',
	},
	{
		name: 'Contact',
		link: '/contact',
	},
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

export default function NavBar(pageName: any) {
	const router = useRouter();

	console.log(router.pathname);

	return (
		<Disclosure as="nav" className="bg-grey-200 shadow mb-4">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Ouvrir le menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<Link href={'/'}>
									<div className="flex-shrink-0 flex items-center cursor-pointer">
										<h1 className={'-pr-12'}>RGASCOIN.FR</h1>
									</div>
								</Link>
								<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
									{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
									{mapping &&
										mapping.map((el) => {
											if (el.link === router.pathname) {
												return (
													<Link href={el.link} key={el.name}>
														<a className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
															{el.name}
														</a>
													</Link>
												);
											} else {
												return (
													<Link href={el.link} key={el.name}>
														<a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
															{el.name}
														</a>
													</Link>
												);
											}
										})}
								</div>
							</div>
						</div>
					</div>
					<Disclosure.Panel className="sm:hidden">
						<div className="pt-2 pb-4 space-y-1">
							{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
							{mapping &&
								mapping.map((el) => {
									if (el.link === router.pathname) {
										return (
											<Link href={el.link} key={el.name}>
												<Disclosure.Button
													as="a"
													href={el.link}
													className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
												>
													{el.name}
												</Disclosure.Button>
											</Link>
										);
									} else {
										return (
											<Link href={el.link} key={el.name}>
												<Disclosure.Button
													as="a"
													href={el.link}
													className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
												>
													{el.name}
												</Disclosure.Button>
											</Link>
										);
									}
								})}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
