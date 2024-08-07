// @flow
import * as React from 'react';

export const WorkExperience = () => {
    return (
        <div className="w-3/5 px-2 pt-4 mt-12">
            <h1 className='text-primaryColor font-extrabold	text-4xl pb-6'>#WORK EXPERIENCE</h1>
            <div className='flex w-full'>
                <div className='flex-initial w-72'>
                    <div className='flex-initial w-72 pr-10 p-1.5'>
                        <div className='text-3xl font-bold text-right'>피앤피시큐어</div>
                        <div className='mt-1.5 text-right'>
                        <span>
                             <span className='front-tech-tag'>Frontend</span>
                             <span className='backend-tech-tag ml-1.5'>Backend</span>
                             <span className='mobile-tech-tag ml-1.5'>iOS</span>
                             <span className='mobile-tech-tag ml-1'>Android</span>
                         </span>
                        </div>
                        <div className='mt-3 text-right'>
                            <span className='block'>2019.04 ~ 2024.08</span>
                            <span>웹플랫폼2팀 / 연구원</span>
                        </div>
                    </div>
                </div>
                <div className='flex-initial w-full'>
                    <h1 className='text-2xl font-bold pt-1.5'>
                        사용자 결재 시스템 개발
                    </h1>
                    <div className='date-text'>2023.07 ~ 2024.08 / 2020.01 ~ 2020.07</div>
                    <div className='pt-4'>
                        <div className='title-tag'>소개</div>
                        <span className='text-md'>서버 및 DBMS 계정, 명령어 등 권한을 부여받기 위해 신청서를 작성하고, 결재를 제공하는 시스템으로서 Frontend와 Backend 개발을 담당하였습니다. 특히 Frontend의 개발환경과 UX를 개선하기 위해 노력했습니다.</span>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>기여한 부분</div>
                        <ul>
                            <li className='custom-list-disc'>Webpack-bundle-analyzer 를 통해 리소스 감소 및 속도 개선</li>
                            <li className='custom-list-disc'>다국어 적용을 통한 제품 판매 범위 확대</li>
                            <li className='custom-list-disc'>NodeJS 버전 업데이트, storybook 도입 등 Frontend 개발 환경 관리</li>
                            <li className='custom-list-disc'>Cypress 도입을 통한 버그 비율 개선</li>
                            <li className='custom-list-disc'>SSE 적용을 통한 UX 개선 (실시간 진행 상황 확인 구현)</li>
                        </ul>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>사용 기술</div>
                        <span className='tech-stack-tag'>VueJS</span>
                        <span className='tech-stack-tag'>SCSS</span>
                        <span className='tech-stack-tag'>Pinia</span>
                        <span className='tech-stack-tag'>NodeJS</span>
                        <span className='tech-stack-tag'>Spring</span>
                        <span className='tech-stack-tag'>JAVA</span>
                        <span className='tech-stack-tag'>MariaDB</span>
                        <span className='tech-stack-tag'>Tomcat</span>
                    </div>
                    <hr className='mt-5 mb-3'/>
                    <h1 className='text-2xl font-bold pt-1.5'>
                        실시간 안면인식 관리시스템 개발
                    </h1>
                    <div className='date-text'>2021.01 ~ 2023.06</div>
                    <div className='pt-4'>
                        <div className='title-tag'>소개</div>
                        <span className='text-md'>사용자의 안면정보를 이용해 인증을 하는 시스템으로서 Frontend와 Backend 개발을 담당하였습니다. 특히 API 개선과 실시간 데이터를 명확하게 전달할 수 있는 UI 설계에 중점을 두고 개발했습니다.</span>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>기여한 부분</div>
                        <ul>
                            <li className='custom-list-disc'>크로스 브라우징 대응을 통한 브라우저 지원 확대</li>
                            <li className='custom-list-disc'>대시보드 UI 설계 및 구현</li>
                            <li className='custom-list-disc'>Redis 적용을 통한 안면인식 관리시스템 API 조회 속도 개선</li>
                            <li className='custom-list-disc'>API 개선을 통한 CPU 사용량 40% 감축</li>
                            <li className='custom-list-disc'>파일 분할 처리, 컴포넌트 분리 등 코드 가독성 개선</li>
                        </ul>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>사용 기술</div>
                        <span className='tech-stack-tag'>VueJS</span>
                        <span className='tech-stack-tag'>SCSS</span>
                        <span className='tech-stack-tag'>GraphQL</span>
                        <span className='tech-stack-tag'>Webpack</span>
                        <span className='tech-stack-tag'>NodeJS</span>
                        <span className='tech-stack-tag'>Spring boot</span>
                        <span className='tech-stack-tag'>JAVA</span>
                        <span className='tech-stack-tag'>Redis</span>
                        <span className='tech-stack-tag'>MariaDB</span>
                        <span className='tech-stack-tag'>Tomcat</span>
                    </div>

                    <hr className='mt-5 mb-3'/>
                    <h1 className='text-2xl font-bold pt-1.5'>
                        사내 제품 라이선스 시스템 개발
                    </h1>
                    <div className='date-text'>2020.12 ~ 2020.12</div>
                    <div className='pt-4'>
                        <div className='title-tag'>소개</div>
                        <span className='text-md'>사내 OTP를 사용하는 고객사를 관리하기 위한 시스템으로서 Frontend와 Backend 개발을 담당하였습니다. 급히 진행된 일정이었던만큼 NodeJS 기반으로 일주일 만에 개발을 완료했습니다.</span>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>기여한 부분</div>
                        <ul>
                            <li className='custom-list-disc'>Frontend/Backend 기술환경 구성 및 기본 기능 구현</li>
                            <li className='custom-list-disc'>REST API 설계 및 개발</li>
                            <li className='custom-list-disc'>대량 데이터 처리를 위한 무한 스크롤 컴포넌트 개발</li>
                        </ul>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>사용 기술</div>
                        <span className='tech-stack-tag'>VueJS</span>
                        <span className='tech-stack-tag'>SCSS</span>
                        <span className='tech-stack-tag'>Webpack</span>
                        <span className='tech-stack-tag'>NodeJS</span>
                        <span className='tech-stack-tag'>MongoDB</span>
                    </div>

                    <hr className='mt-5 mb-3'/>
                    <h1 className='text-2xl font-bold pt-1.5'>
                        OTP 모바일 앱 개발
                    </h1>
                    <div className='date-text'>2020.08 ~ 2020.12</div>
                    <div className='pt-4'>
                        <div className='title-tag'>소개</div>
                        <span className='text-md'>인증 시스템에서 사용하는 자사 전용 OTP 생성 모바일 앱으로서 아키텍처 설계, 개발부터 배포까지 혼자 맡아 진행했습니다.</span>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>기여한 부분</div>
                        <ul>
                            <li className='custom-list-disc'>Google Material Design 기반 모바일 UI 설계 및 개발</li>
                            <li className='custom-list-disc'>iOS, Android 앱 심사 및 배포 프로세스 경험</li>
                            <li className='custom-list-disc'>모바일 앱 아키텍처 설계</li>
                        </ul>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>사용 기술</div>
                        <span className='tech-stack-tag'>Swift</span>
                        <span className='tech-stack-tag'>JAVA</span>
                    </div>

                    <hr className='mt-5 mb-3'/>
                    <h1 className='text-2xl font-bold pt-1.5'>
                        영업관리 사내 시스템 개선
                    </h1>
                    <div className='date-text'>2019.04 ~ 2019.12</div>
                    <div className='pt-4'>
                        <div className='title-tag'>소개</div>
                        <span className='text-md'>제품 수주, 고객사 관리 등 사내에서 사용하는 영업관리 시스템으로서 Frontend와 Backend 개발을 담당하였습니다. 느린 조회 속도 등 기존에 있던 문제점을 해결하고, Frontend의 기술환경을 개선하기 위해 노력했습니다.</span>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>기여한 부분</div>
                        <ul>
                            <li className='custom-list-disc'>Javascript ES6 적용</li>
                            <li className='custom-list-disc'>메인 페이지 UI 개선</li>
                            <li className='custom-list-disc'>쿼리 튜닝을 통한 영업관리 조회 속도 개선</li>
                        </ul>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>사용 기술</div>
                        <span className='tech-stack-tag'>Javascript</span>
                        <span className='tech-stack-tag'>HTML/CSS</span>
                        <span className='tech-stack-tag'>NodeJS</span>
                        <span className='tech-stack-tag'>JSP</span>
                        <span className='tech-stack-tag'>Spring</span>
                        <span className='tech-stack-tag'>JAVA</span>
                        <span className='tech-stack-tag'>MariaDB</span>
                        <span className='tech-stack-tag'>Tomcat</span>
                    </div>
                </div>
            </div>

            <div className='flex w-full mt-8'>
                <div className='flex-initial w-72'>
                    <div className='flex-initial w-72 pr-10 p-1.5'>
                        <div className='text-3xl font-bold text-right'>케이엘넷</div>
                        <div className='mt-1.5 text-right'>
                        <span>
                             <span className='front-tech-tag'>Frontend</span>
                             <span className='backend-tech-tag ml-1.5'>Backend</span>
                         </span>
                        </div>
                        <div className='mt-3 text-right'>
                            <span className='block'>2016.10 ~ 2018.04</span>
                            <span>eBiz개발팀 / 사원</span>
                        </div>
                    </div>
                </div>
                <div className='flex-initial w-full'>
                    <hr className='mb-3'/>
                    <h1 className='text-2xl font-bold pt-1.5'>
                        전자세금계산서 시스템 유지보수
                    </h1>
                    <div className='date-text'>2017.05 ~ 2018.04</div>
                    <div className='pt-4'>
                        <div className='title-tag'>소개</div>
                        <span className='text-md'>세금계산서를 웹에서 발행하고, 조회하는 시스템으로 Frontend와 Backend 개발을 개발했습니다. 기본적인 유지보수를 비롯해 비즈니스의 요구에 맞는 다양한 새로운 기능을 개발했습니다.</span>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>기여한 부분</div>
                        <ul>
                            <li className='custom-list-disc'>ISMS 인증 대응</li>
                            <li className='custom-list-disc'>계산서 발행 알림톡 기능 추가</li>
                            <li className='custom-list-disc'>기존 비즈니스 로직 유지보수</li>
                        </ul>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>사용 기술</div>
                        <span className='tech-stack-tag'>JSP</span>
                        <span className='tech-stack-tag'>Spring</span>
                        <span className='tech-stack-tag'>JAVA</span>
                        <span className='tech-stack-tag'>Oracle</span>
                        <span className='tech-stack-tag'>Tomcat</span>
                    </div>
                    <hr className='mt-5 mb-3'/>
                    <h1 className='text-2xl font-bold pt-1.5'>
                        전자세금계산서 시스템 UI 개선
                    </h1>
                    <div className='date-text'>2016.10 ~ 2017.04</div>
                    <div className='pt-4'>
                        <div className='title-tag'>소개</div>
                        <span className='text-md'>인턴으로 부여받은 첫 업무로서, IE 브라우저의 Flash 지원 종료에 따라 Flex에서 JSP로 UI를 개선했습니다.</span>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>기여한 부분</div>
                        <ul>
                            <li className='custom-list-disc'>레거시 코드 청산</li>
                            <li className='custom-list-disc'>사용자정보 관리, 세금계산서 조회 UI 개선</li>
                            <li className='custom-list-disc'>브라우저 별 호환성 테스트 및 대응</li>
                        </ul>
                    </div>
                    <div className='pt-4'>
                        <div className='title-tag'>사용 기술</div>
                        <span className='tech-stack-tag'>JSP</span>
                        <span className='tech-stack-tag'>Flex</span>
                        <span className='tech-stack-tag'>Spring</span>
                        <span className='tech-stack-tag'>JAVA</span>
                        <span className='tech-stack-tag'>Oracle</span>
                        <span className='tech-stack-tag'>Tomcat</span>
                    </div>

                    <hr className='mt-5 mb-3'/>

                </div>
            </div>
        </div>

    );
};