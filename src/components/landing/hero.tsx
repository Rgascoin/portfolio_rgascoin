import Link from 'next/link';

export default function Hero() {
	return (
		<div className="bg-gray-900 mt-4">
			<main>
				<div>
					{/* Hero card */}
					<div className="relative">
						<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-800" />
						<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
							<div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
								<div className="absolute inset-0">
									<img
										className="h-full w-full object-cover"
										src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
										alt="People working on laptops"
									/>
									<div className="absolute inset-0 bg-indigo-400 mix-blend-multiply" />
								</div>
								<div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
									<h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
										<span className="block text-white">Roman Gascoin</span>
										<span className="block text-indigo-200">Blockchain Freelancer</span>
									</h1>
									<p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
										Development of a blockchain solution compatible with EVM or front-end
										implementation, I would be happy to help you.
									</p>
									<div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
										<div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
											<Link href="/contact">
												<a
													href="#"
													className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
												>
													Contact me
												</a>
											</Link>
											<Link href="/projets">
												<a
													href="#"
													className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
												>
													My projects
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Logo cloud */}
					<div className="bg-gray-800">
						<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
							<p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
								My current favorite technologies.
							</p>
							<div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<img
										className="h-12  hover:brightness-100 transition invert delay-100 transition delay-100"
										src="https://cdn.svgporn.com/logos/solidity.svg"
										alt="Tuple"
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<img
										className="h-12  hover:brightness-100 transition delay-100"
										src="https://cdn.svgporn.com/logos/typescript-icon.svg"
										alt="Mirage"
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<img
										className="h-12  hover:brightness-100 transition delay-100"
										src="https://cdn.svgporn.com/logos/python.svg"
										alt="StaticKit"
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
									<img
										className="h-12  hover:brightness-100 transition invert delay-100"
										src="https://cdn.svgporn.com/logos/nextjs-icon.svg"
										alt="Transistor"
									/>
								</div>
								<div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
									<img
										className="h-12  hover:brightness-100 transition delay-100"
										src="https://cdn.svgporn.com/logos/hardhat-icon.svg"
										alt="Workcation"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* More main page content here... */}
			</main>
		</div>
	);
}
