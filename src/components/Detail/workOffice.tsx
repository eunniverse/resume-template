import React from 'react';

interface Props {
    companyName: string; // 회사명
    roles: string[]; // 역할 (Frontend, Backend, iOS, Android 로 설정되어있으며, 필요할 경우 global.css > {role}-tech-tag 추가)
    hireDate: string; // 재직 기간
    teamInfo: string; // 팀 정보
}

/**
 * #WORK EXPERIENCE 의 왼쪽 영역
 * @param companyName
 * @param roles
 * @param hireDate
 * @param teamInfo
 * @constructor
 */
const WorkOffice = ({companyName, roles, hireDate, teamInfo}: Props) => {
    return (
        <div className='flex-shrink-0 w-full sm:w-72 mb-4 sm:mb-0'>
            <div className='pr-0 sm:pr-10 p-1.5'>
                <div className='text-xl sm:text-3xl font-bold text-right'>{companyName}</div>
                <div className='mt-1.5 text-right'>
                    {roles && roles.map((role, index) => (
                        <span key={index}>
                            <span className={`${role}-tech-tag`}>{role}</span>
                        </span>
                    ))}
                </div>
                <div className='mt-3 text-right'>
                    <span className='block'>{hireDate}</span>
                    <span>{teamInfo}</span>
                </div>
            </div>
        </div>
    );
};

export default WorkOffice;