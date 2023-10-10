import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';


NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, exact, extraMatch, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href) || pathname.startsWith(extraMatch);

    if (isActive) {
        props.className = ' active';
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}

export { NavLink };