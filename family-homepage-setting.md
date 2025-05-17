# FamilyFoods 홈페이지 프로젝트

## 프로젝트 개요
과자, 빙과류를 제조, 유통하는 훼미리식품(주)의 홈페이지 리뉴얼 프로젝트입니다. 제품을 소개하고 기업 이미지를 효과적으로 전달할 수 있는 웹사이트를 개발합니다.

## 기술 스택

### 프론트엔드
- **Astro**: 정적 웹사이트 생성 프레임워크
- **HTML/CSS/JavaScript**: 기본 웹 기술
- **SVG**: 임시 이미지 및 아이콘

### 디자인 및 UX
- 반응형 디자인: 모바일, 태블릿, 데스크톱 지원
- 모던 UI/UX: 사용자 친화적 인터페이스

### 배포 및 호스팅
- 로컬 개발 서버: Astro 내장 개발 서버

## 프로젝트 구조

```
D:\Project\FamilyFoods\
├── .astro/              # Astro 설정 및 캐시 파일
├── .git/                # Git 저장소
├── .vscode/             # VS Code 설정
├── node_modules/        # 패키지 의존성
├── public/              # 정적 파일 폴더
│   ├── images/          # 이미지 파일 폴더
│   │   ├── career-image.svg
│   │   ├── flag-cn.svg
│   │   ├── flag-en.svg
│   │   ├── flag-ko.svg
│   │   ├── icon-fssc.svg
│   │   ├── icon-haccp.svg
│   │   ├── icon-ingredients.svg
│   │   ├── icon-iso.svg
│   │   ├── main-visual-bg.svg
│   │   ├── product-ice1.svg
│   │   ├── product-ice2.svg
│   │   ├── product-snack1.svg
│   │   └── product-snack2.svg
│   ├── favicon.svg      # 페이비콘
│   └── index.html       # 리다이렉션 페이지
├── src/                 # 소스 코드 폴더
│   ├── assets/          # 자산 폴더
│   ├── components/      # 컴포넌트 폴더
│   ├── layouts/         # 레이아웃 폴더
│   │   ├── Layout.astro # 기본 레이아웃
│   │   └── MainLayout/  # 메인 레이아웃 폴더
│   │       └── MainLayout.astro # 메인 레이아웃 컴포넌트
│   ├── pages/           # 페이지 폴더 (라우팅)
│   │   └── index.astro  # 홈페이지
│   └── styles/          # 스타일 폴더
│       ├── base.css     # 기본 스타일
│       └── global.css   # 글로벌 스타일
├── .gitignore           # Git 제외 파일 설정
├── astro.config.mjs     # Astro 설정 파일
├── family-homepage-setting.md # 프로젝트 문서
├── package-lock.json    # 패키지 의존성 잠금 파일
├── package.json         # 프로젝트 정보 및 의존성
├── postcss.config.js    # PostCSS 설정
├── README.md            # 프로젝트 README
├── tailwind.config.js   # Tailwind CSS 설정
└── tsconfig.json        # TypeScript 설정
```

## 구현된 페이지 및 기능

### 1. 메인 페이지 (index.astro)
- **헤더 섹션**: 로고, 내비게이션 메뉴, 언어 선택 옵션
- **메인 비주얼 섹션**: 회사 슬로건 및 소개 문구
- **품질 인증 섹션**: HACCP, FSSC22000 등 인증 정보
- **제품 하이라이트 섹션**: 베스트 제품, 신제품, 과자류, 빙과류 카테고리
- **뉴스 및 공지사항 섹션**: 최신 뉴스와 이벤트 정보
- **인재채용 섹션**: 채용 정보 및 링크
- **푸터 섹션**: 회사 정보, 네트워크, 고객지원, 정책 링크

### 2. 레이아웃 (MainLayout.astro)
- 전체 페이지의 공통 레이아웃 정의
- 반응형 디자인 적용
- 메타 정보 및 글꼴 설정
- 공통 스타일 정의

## 디자인 컨셉
- **색상 테마**:
  - 주요 색상: 오렌지색(#FF5E00) - 따뜻함과 친근함
  - 보조 색상: 짙은 푸른색(#34495E) - 신뢰감과 안정감
  - 강조 색상: 노란색(#FFD54F) - 행복과 즐거움
  - 배경 색상: 크림색(#F9F6F0) - 부드러움
  - 성공 색상: 녹색(#4CAF50) - 안전, 자연

- **타이포그래피**:
  - 웹 폰트: 'Noto Sans KR' (Google Fonts)
  - 반응형 폰트 크기 적용

- **UI 요소**:
  - 둥근 모서리 디자인
  - 그림자 효과로 깊이감 부여
  - 호버 애니메이션
  - 부드러운 전환 효과

## 추가 구현 예정 기능
1. 제품 세부 페이지: 각 제품별 상세 정보 페이지
2. 회사 소개 페이지: 회사 연혁, 비전, 미션 등 소개
3. 고객센터 페이지: FAQ, 문의 양식
4. 뉴스 상세 페이지: 뉴스 및 공지사항 상세 내용
5. 정책 페이지: 개인정보보호정책, 이용약관
6. 다국어 지원: 영어, 중국어 페이지

## 개발 기록

### 2025-05-16
- 프로젝트 초기 구조 설정
- 메인 레이아웃 구현
- 임시 SVG 이미지 생성
- 메인 페이지 디자인 및 구현
- Astro 설정 최적화 및 라우팅 오류 수정
- 불필요한 테스트 파일 제거 및 프로젝트 정리

## 개발 및 실행 방법

### 개발 환경 설정
```bash
# 프로젝트 폴더로 이동
cd D:\Project\FamilyFoods

# 의존성 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

### 빌드 및 배포
```bash
# 프로덕션 빌드
npm run build

# 빌드된 사이트 미리보기
npm run preview
```

## 참고 사항
- 현재 모든 이미지는 SVG 형식의 임시 그래픽입니다.
- 실제 구현 시 이미지와 콘텐츠는 실제 회사 자료로 교체될 예정입니다.
- 웹사이트는 데스크톱 환경(Windows 10)에서 Astro 개발 도구를 통해 개발되었습니다.
