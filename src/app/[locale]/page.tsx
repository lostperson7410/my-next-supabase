import { useTranslations } from 'next-intl';
import React from 'react';

const LocalePage = () => {
    const t = useTranslations();

    return (
        <div className='bg-red-500 '>
            <h1>{t('Index.title')}</h1>
            {/* Rest of your page content */}
        </div>
    );
};

export default LocalePage;