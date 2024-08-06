import { defaultLocale, getDictionary } from '@/lib/i18n';

import HeroSection from '@/components/home/HeroSection';

export default async function Home({ params }) {

	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName); // 获取内容

	return (
		<>
			<HeroSection locale={dict.HeroSection} ProductLocale={dict.Product}/>
			{/*<Hero*/}
			{/*	locale={dict.Hero}*/}
			{/*	CTALocale={dict.CTAButton}*/}
			{/*/>*/}
			{/*<Feature*/}
			{/*	locale={dict.Feature}*/}
			{/*	langName={langName}*/}
			{/*/>*/}
			{/*<Pricing*/}
			{/*	locale={dict.Pricing}*/}
			{/*	langName={langName}*/}
			{/*/>*/}
			{/*<Testimonial*/}
			{/*	locale={dict.Testimonial}*/}
			{/*	langName={langName}*/}
			{/*/>*/}
			{/*<Faq*/}
			{/*	locale={dict.Faq}*/}
			{/*	langName={langName}*/}
			{/*/>*/}
			{/*<Cta*/}
			{/*	locale={dict.CTA}*/}
			{/*	CTALocale={dict.CTAButton}*/}
			{/*/>*/}
		</>
	);
}
