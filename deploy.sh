#!/bin/bash

# GitHub Pages 배포 스크립트
# 이 스크립트는 훼미리식품 홈페이지를 빌드하고 GitHub Pages에 배포합니다.

echo "===== 빌드 및 배포 시작 ====="

# 1. 의존성 패키지 설치
echo "의존성 패키지 설치 중..."
npm install

# 2. 프로젝트 빌드
echo "프로젝트 빌드 중..."
npm run build

# 3. GitHub Pages 배포
echo "GitHub Pages에 배포 중..."
npm run deploy

echo "===== 빌드 및 배포 완료 ====="
echo "사이트 URL: https://securil.github.io/FamilyFoods/"
