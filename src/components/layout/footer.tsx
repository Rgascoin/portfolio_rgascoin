/* This example requires Tailwind CSS v2.0+ */
const navigation = [
	{
		name: 'LinkedIn',
		href: 'www.linkedin.com/in/rgascoin',
		icon: (props: any) => (
			<img
				className="h-6 grayscale  hover:grayscale-0 transition delay-100"
				src="https://cdn.svgporn.com/logos/linkedin-icon.svg"
				alt="Mirage"
			/>
		),
	},
	{
		name: 'Malt',
		href: 'https://www.malt.fr/profile/romangascoin',
		icon: (props: any) => (
			<img
				className="h-6 grayscale  hover:grayscale-0 transition delay-100"
				src="https://medias.carrieres-juridiques.com/image/employeurs/logos/5b50a49dbaedf.png"
				alt="Mirage"
			/>
		),
	},
	{
		name: 'GitHub',
		href: 'https://github.com/Rgascoin',
		icon: (props: any) => (
			<img
				className="h-6 grayscale  hover:grayscale-0 transition delay-100"
				src="https://cdn.svgporn.com/logos/github-icon.svg"
				alt="Mirage"
			/>
		),
	},
];

export default function Footer() {
	return (
		<footer className="bg-gray-100">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{navigation.map((item) => (
						<a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<div className="mt-8 md:mt-0 md:order-1">
					<p className="text-center text-base text-gray-400">
						&copy; 2022 Rgascoin, Inc. tout droit réservé.
					</p>
				</div>
			</div>
		</footer>
	);
}
