@echo off
echo GitHub Pages에 배포를 시작합니다...

:: 프로젝트 빌드
echo 프로젝트 빌드 중...
call npx astro build

:: .nojekyll 파일 생성 (GitHub Pages에서 Jekyll 처리 비활성화)
echo .nojekyll 파일 생성 중...
echo. > dist\.nojekyll

:: 명시적으로 저장소 URL을 지정하여 배포
echo GitHub Pages에 배포 중...
call npx gh-pages -d dist -r https://github.com/securil/FamilyFoods.git -b gh-pages -m "Website updated at %date% %time%"

echo 배포가 완료되었습니다!
