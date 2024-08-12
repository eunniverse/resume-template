## resume-template 

### 설명
NextJS와 React, Typescript, Tailwind CSS 기반 이력서 템플릿입니다. 영어/한글 처리가 되어있고, 아래 `설정`을 참고하여 사용하면 됩니다.

### 기능
1. 이력서 다국어 제공 (ko, en)
2. 이메일 전송 기능 제공
3. 반응형 UI 대응
4. 사용자 화면 설정에 따른 dark mode 지원

### 설정
`1. email 전송 설정` <br>
 - email 전송은 `email.js` 라이브러리를 사용하고 있습니다. (https://www.emailjs.com/)
 - 따라서 emailJS 사용을 위한 설정 파일 추가가 필요합니다.
```text
GMAIL_APP_KEY = {APP_KEY}
GMAIL_USER = {SEND_USER}
NEXT_PUBLIC_MAIL_SERVICE_KEY = {SERVICE_KEY}
NEXT_PUBLIC_MAIL_TEMPLATE_KEY = {TEMPLATE_KEY}
NEXT_PUBLIC_MAIL_PUBLIC_KEY = {PUBLIC_KEY}
```

`2. 데이터 설정` <br>
`ko.json` 과 `en.json`을 기준으로 이력서 데이터를 세팅합니다. 현재 샘플 데이터를 기준으로 추가하면 되고, 대부분의 컴포넌트가 다음과 같으므로 예시를 확인해주세요.

**_주요 로직 예시_**
```jsx
/*
 * index : 순번 
 * techCount : 사용 기술
 * github : Git URL
 * npm : npm URL
 **/
<OtherProject index={0} techCount={4} github={'{GITURL}'} npm={'{npmURL}'}/>
```

```typescript
/**
 * useTranslationArray는 첫번째 인자의 다국어 데이터를 두번째 인자만큼 가져오는 함수다.
 */
const descriptions = useTranslationArray('introduce.commentList', 5);
```


### Getting Started

```bash
# 설치
npm install

# 실행
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
