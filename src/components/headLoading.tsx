"use client"

// @flow
import * as React from 'react';
import useScrollPercentage from 'react-scroll-percentage-hook';

type Props = {

};

export const HeadLoading = (props: Props) => {
    const { percentage } = useScrollPercentage<HTMLDivElement>({ windowScroll: true });

    return (
        <div className={'parent-nav-underline'}>
            <div className={'nav-underline'}/>
            <div style={{width: `${percentage.vertical}%`, backgroundColor: '#00025c', height: '5px'}}/>
        </div>
    );
};