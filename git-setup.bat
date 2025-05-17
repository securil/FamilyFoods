@echo off
echo ===== Git 저장소 설정 시작 =====

:: 1. Git 저장소 초기화 (이미 초기화되어 있다면 건너뜀)
if not exist ".git" (
  echo Git 저장소 초기화 중...
  git init
) else (
  echo Git 저장소가 이미 초기화되어 있습니다.
)

:: 2. GitHub 원격 저장소 설정
echo GitHub 원격 저장소 설정 중...
git remote remove origin 2>nul
git remote add origin https://github.com/securil/FamilyFoods.git
echo 원격 저장소 URL: https://github.com/securil/FamilyFoods.git

:: 3. 모든 파일 스테이징
echo 파일 스테이징 중...
git add .

:: 4. 커밋 메시지 입력
set /p commit_message=커밋 메시지를 입력하세요 (기본값: Initial commit): 
if "%commit_message%"=="" set commit_message=Initial commit

:: 5. 커밋 수행
echo 커밋 수행 중: "%commit_message%"
git commit -m "%commit_message%"

:: 6. GitHub main 브랜치에 푸시
echo GitHub main 브랜치에 푸시 중...
git push -u origin main

echo ===== Git 저장소 설정 완료 =====
pause
