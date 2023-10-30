"use client"

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';


function NavLink({ href, exact = false, param, extraMatch, children, ...props }) {

    const checkExtraMatch = () => {
        if (!(extraMatch instanceof Array)) {
            return pathname.startsWith(extraMatch);
        }
        for (let match of extraMatch) {
            if (pathname.startsWith(match)) {
                return true;
            }
        }
        return false;

    }

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const isActive = (exact ? pathname === href : pathname.startsWith(href)) || checkExtraMatch() || (param && searchParams.get('class') == param);


    if (isActive) {
        props.className = ' active';
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
}

export default NavLink;