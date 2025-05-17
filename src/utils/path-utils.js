// src/utils/path-utils.js - 경로 관련 유틸리티 함수

/**
 * 경로 앞에 BASE_URL을 추가하는 유틸리티 함수
 * 
 * @param {string} path - 추가할 경로 (예: /images/logo.png)
 * @returns {string} 베이스 경로가 추가된 전체 경로 (예: /FamilyFoods/images/logo.png)
 */
export function prependBase(path) {
  // 기본 베이스 경로
  const BASE_URL = '/FamilyFoods';
  
  // 경로가 이미 절대 URL이거나 베이스 경로로 시작하면 그대로 반환
  if (!path || path.startsWith('http') || path.startsWith('//') || path.startsWith(BASE_URL)) {
    return path;
  }
  
  // 경로가 /로 시작하는지 확인하고 베이스 경로 추가
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${normalizedPath}`;
}

/**
 * 내부 링크에 베이스 경로를 추가하는 함수
 * 
 * @param {string} href - 내부 링크 경로 (예: /about)
 * @returns {string} 베이스 경로가 추가된 링크 (예: /FamilyFoods/about)
 */
export function internalLink(href) {
  return prependBase(href);
}
