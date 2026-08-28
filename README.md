# my-portfolio (Angular)

Angular 18 standalone 컴포넌트 기반으로 재구축한 포트폴리오입니다.

## 로컬 실행

```bash
npm install
npm start
# http://localhost:4200
```

## 빌드

```bash
npm run build
# 결과물: dist/my-portfolio/browser
```

## GitHub Pages 배포 (자동)

이 저장소에는 `.github/workflows/deploy.yml`이 포함되어 있어,
`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 후 GitHub Pages에 배포합니다.

처음 1회만 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정해주세요.

배포 후 주소: `https://joyeonjoo.github.io/my-portfolio/`

## 프로젝트 데이터 수정

각 프로젝트의 소개/담당업무/성과 문구는
`src/app/data/projects.ts` 한 파일에서 전부 관리합니다.
성과 지표(숫자)를 나중에 채우실 때도 이 파일만 수정하시면 됩니다.

## 폴더 구조

```
src/app/
  app.component.ts        루트 컴포넌트 (라우터 아웃렛만 포함)
  app.routes.ts            라우팅 설정
  data/projects.ts         프로젝트 데이터 (여기만 수정하면 전체 페이지 반영)
  pages/home/               메인 페이지 (About/Skills/Projects/Process/Contact)
  pages/project-detail/     프로젝트 상세 페이지 (라우트 파라미터로 동적 렌더링)
```
