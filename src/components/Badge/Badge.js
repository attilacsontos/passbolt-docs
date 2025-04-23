import React from 'react';
import clsx from 'clsx';
import styles from './Badge.module.css';
import PropTypes from 'prop-types';
import Link from '@docusaurus/Link';

const Badge = ({ children, href, variant = 'primary' }) => {
  if (!children) return null;

  const className = clsx([styles.badge, styles[variant]]);

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <span className={className}>{children}</span>;
};

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Badge;
