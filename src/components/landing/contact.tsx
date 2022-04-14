/* This example requires Tailwind CSS v2.0+ */
export default function Contact() {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
				<div className="divide-y-2 divide-gray-200">
					<div className="lg:grid lg:grid-cols-3 lg:gap-8">
						<h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Me trouver</h2>
						<div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
							<div>
								<h3 className="text-lg leading-6 font-medium text-gray-900">Via malt</h3>
								<dl className="mt-2 text-base text-gray-500">
									<a href={'https://www.malt.fr/profile/romangascoin'}>vers mon profil</a>
								</dl>
							</div>
							<div>
								<h3 className="text-lg leading-6 font-medium text-gray-900">Par mail</h3>
								<dl className="mt-2 text-base text-gray-500">
									<div>
										<dt className="sr-only">Email</dt>
										<dd>roman.gascoin@epitech.eu</dd>
									</div>
								</dl>
							</div>
							<div>
								<h3 className="text-lg leading-6 font-medium text-gray-900">Sur github</h3>
								<dl className="mt-2 text-base text-gray-500">
									<a href={'https://github.com/Rgascoin'}>vers mon profil</a>
								</dl>
							</div>
							<div>
								<h3 className="text-lg leading-6 font-medium text-gray-900">sur linkedIn</h3>
								<dl className="mt-2 text-base text-gray-500">
									<a href={'www.linkedin.com/in/rgascoin'}>vers mon profil</a>
								</dl>
							</div>
						</div>
					</div>
					<div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
						<h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">En présentiel</h2>
						<div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
							<div>
								<h3 className="text-lg leading-6 font-medium text-gray-900">Régions parisienne</h3>
								<div className="mt-2 text-base text-gray-500">
									<p>Paris et ses alentours</p>
									<p className="mt-1">Versailles</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
