import React from 'react';

interface Props {
    IconComponent: React.ElementType;
    tooltipText: string;
    handleClick: (event: React.MouseEvent<HTMLElement>) => void;
    iconSize?: number; // 선택적 prop으로 기본값을 설정할 수 있음
}

const HeaderIcon = ({tooltipText, handleClick, IconComponent, iconSize = 32} :Props) => {
    return (
        <div className='has-tooltip inline-block'>
            <span className='tooltip rounded shadow-lg -mt-8 hidden sm:block'>
                {tooltipText}
            </span>
            <IconComponent
                className='ml-2 sm:ml-5 cursor-pointer'
                size={iconSize}
                onClick={handleClick}
            />
        </div>
    );
};

export default HeaderIcon;