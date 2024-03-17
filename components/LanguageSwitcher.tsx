'use client'

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const LanguageSwitcher: React.FC = () => {
    const router = useRouter();


    const handleLanguageChange = (language: string) => {
        console.log("🚀 ~ handleLanguageChange ~ router:", router)
        router.replace(`/${language}`);
    };

    return (
        <div>
            <button onClick={() => handleLanguageChange('en')}>EN</button>
            <button onClick={() => handleLanguageChange('th')}>TH</button>
        </div>
    );
};

export default LanguageSwitcher;