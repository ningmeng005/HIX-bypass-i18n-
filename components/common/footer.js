'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { defaultLocale, getDictionary } from '@/lib/i18n';

export default function Footer({ params }) {
	const [dict, setDict] = useState(null);
	const currentYear = new Date().getFullYear();
	const langName = params?.lang || defaultLocale; // 使用可选链操作符进行安全访问

	useEffect(() => {
		const fetchDictionary = async () => {
			const dictionary = await getDictionary(langName);
			setDict(dictionary);
		};

		fetchDictionary();
	}, [langName]);

	if (!dict) {
		return null; // 或者你可以显示一个加载指示器
	}

	return (
		<>
			<footer className={'w-full bg-[#202020] text-[#f7f7f7]'}>
				<div className={'max-w-[1280px] mx-auto px-[15px] py-[20px]'}>
					<p className={'text-center'}>{dict.FooterSection.Copyright} © {currentYear}
						<Link
							href="/"
							className={'hover:text-blue-500 px-[5px]'}
						>
							{dict.Product.Name}
						</Link>
					</p>
				</div>
			</footer>
		</>
	);
}
