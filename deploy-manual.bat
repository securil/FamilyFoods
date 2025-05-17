@echo off
echo 배포 프로세스를 시작합니다...

:: 프로젝트 빌드
echo 프로젝트 빌드 중...
call npx astro build

:: .nojekyll 파일 생성 (GitHub Pages에서 Jekyll 처리 비활성화)
echo .nojekyll 파일 생성 중...
echo. > dist\.nojekyll

:: 현재 브랜치 이름 저장
for /f "tokens=*" %%a in ('git rev-parse --abbrev-ref HEAD') do set CURRENT_BRANCH=%%a

:: gh-pages 브랜치가 존재하는지 확인
git show-ref --verify --quiet refs/heads/gh-pages
if %ERRORLEVEL% neq 0 (
  echo gh-pages 브랜치 생성 중...
  git checkout --orphan gh-pages
  git reset --hard
  git commit --allow-empty -m "Initial gh-pages commit"
  git checkout %CURRENT_BRANCH%
)

:: dist 폴더 내용을 gh-pages 브랜치로 복사
echo dist 폴더 내용을 gh-pages 브랜치로 복사 중...
git checkout gh-pages
git pull origin gh-pages --rebase || echo "gh-pages 브랜치를 풀할 수 없습니다. 계속 진행합니다."

:: dist 폴더 외의 모든 파일 제거
echo 이전 파일 정리 중...
del /q /s *
for /d %%x in (*) do @rd /s /q "%%x"

:: dist 폴더의 내용을 현재 폴더로 복사
echo dist 폴더 콘텐츠 복사 중...
xcopy /s /y dist\*

:: 변경사항 커밋 및 푸시
echo 변경사항 커밋 및 푸시 중...
git add -A
git commit -m "Website updated at %date% %time%"
git push origin gh-pages

:: 원래 브랜치로 돌아가기
echo 원래 브랜치로 돌아가는 중...
git checkout %CURRENT_BRANCH%

echo 배포가 완료되었습니다!
