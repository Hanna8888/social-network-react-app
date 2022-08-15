import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Post.module.css';

function Post({className, likesCounter, desc}) {
    return (
        <li className={cn(styles.Root, className)}>
            <img src="" alt="" />
            <span className={styles.like}>{likesCounter}</span>
            <br/>
            <span>{desc}</span>
        </li>
    )
}

Post.propTypes = {
    className: PropTypes.string,
    likesCounter: PropTypes.number,
    desc: PropTypes.string
}

Post.defaultProps = {
    className: '',
    likesCounter: 12,
    desc: ''
}

export default Post;
