'use client';

import { IconMenu } from '@/components/icons/IconMenu';
import { useLanguage, tString } from '@/intl/client';
import { tcls } from '@/lib/tailwind';

export function HeaderMobileMenu(props: Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
    const language = useLanguage();

    const toggleNavigation = () => {
        if (document.body.classList.contains('navigation-open')) {
            document.body.classList.remove('navigation-open');
        } else {
            document.body.classList.add('navigation-open');
        }
    };
    return (
        <button
            {...props}
            aria-label={tString(language, 'table_of_contents_button_label')}
            onClick={toggleNavigation}
        >
            <IconMenu
                className={tcls(
                    'w-8',
                    'h-8',
                    'bg-dark/2',
                    'rounded',
                    'border',
                    'hover:bg-dark/3',
                    'border-dark/1',
                    'p-[0.25rem]',
                    'dark:bg-light/1',
                    'dark:border-light/1',
                    'dark:hover:bg-light/2',
                )}
            />
        </button>
    );
}
