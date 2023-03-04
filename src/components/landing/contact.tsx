/* This example requires Tailwind CSS v2.0+ */
import { useRouter } from 'next/router';

export default function Contact() {
	const router = useRouter();
	return (
		<div className="bg-gray-800">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
				<div className="divide-y-2 divide-gray-200">
					<div className="lg:grid lg:grid-cols-3 lg:gap-8">
						<h2 className="text-2xl font-extrabold text-white sm:text-3xl">Find me</h2>
						<div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
							<div>
								<h3 className="text-lg leading-6 font-medium text-white">With malt</h3>
								<dl className="mt-2 text-base text-gray-400 hover:underline">
									<a href={'https://www.malt.fr/profile/romangascoin'}>See my profil</a>
								</dl>
							</div>
							<div>
								<h3 className="text-lg leading-6 font-medium text-white">With mail</h3>
								<dl className="mt-2 text-base text-gray-400 hover:underline">
									<div onClick={() => router.push('mailto:roman.gascoin@epitech.eu')}>
										<dt className="sr-only">Email</dt>
										<dd>roman.gascoin@epitech.eu</dd>
									</div>
								</dl>
							</div>
							<div>
								<h3 className="text-lg leading-6 font-medium text-white">With github</h3>
								<dl className="mt-2 text-base text-gray-400 hover:underline">
									<a href={'https://github.com/Rgascoin'}>See my profil</a>
								</dl>
							</div>
							<div>
								<h3 className="text-lg leading-6 font-medium text-white">With linkedIn</h3>
								<dl className="mt-2 text-base text-gray-400 hover:underline">
									<a href={'www.linkedin.com/in/rgascoin'}>See my profil</a>
								</dl>
							</div>
						</div>
					</div>
					<div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
						<h2 className="text-2xl font-extrabold text-white sm:text-3xl">In person</h2>
						<div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
							<div>
								<h3 className="text-lg leading-6 font-medium text-white">Paris</h3>
								<div className="mt-2 text-base text-gray-400">
									<p>Yvelines</p>
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
