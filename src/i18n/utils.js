// src/i18n/utils.js - 안전한 다국어 유틸리티 함수

import { supportedLanguages, getLanguageName, t as translate, defaultLanguage } from './index.js';

/**
 * URL에서 언어 코드 추출
 * @param {string} pathname - URL 경로
 * @returns {string} 언어 코드
 */
export function getLanguageFromURL(pathname) {
  if (!pathname || typeof pathname !== 'string') {
    return defaultLanguage;
  }
  
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  return supportedLanguages.includes(firstSegment) ? firstSegment : defaultLanguage;
}

/**
 * 안전한 번역 함수
 * @param {string} key - 번역 키
 * @param {string} lang - 언어 코드
 * @returns {string} 번역된 텍스트
 */
export function safeTranslate(key, lang = defaultLanguage) {
  try {
    return translate(key, lang);
  } catch (error) {
    console.error(`Translation error for key "${key}":`, error);
    return key;
  }
}

/**
 * 다른 언어로의 URL 생성
 * @param {string} path - 현재 경로
 * @param {string} targetLang - 대상 언어
 * @returns {string} 변환된 URL
 */
export function translatePath(path, targetLang = defaultLanguage) {
  if (!path || typeof path !== 'string') {
    return targetLang === defaultLanguage ? '/' : `/${targetLang}/`;
  }
  
  // 경로를 세그먼트로 분할
  const segments = path.split('/').filter(Boolean);
  
  // 첫 번째 세그먼트가 지원 언어인지 확인
  const firstSegment = segments[0] || '';
  const isLangPath = supportedLanguages.includes(firstSegment);
  
  // 현재 경로에서 언어 부분을 제외한 나머지 경로
  const pathWithoutLang = isLangPath ? '/' + segments.slice(1).join('/') : path;
  
  // 메인 페이지인 경우
  if (pathWithoutLang === '/' || pathWithoutLang === '') {
    return targetLang === defaultLanguage ? '/' : `/${targetLang}/`;
  }
  
  // 다른 페이지인 경우
  return targetLang === defaultLanguage 
    ? pathWithoutLang 
    : `/${targetLang}${pathWithoutLang.startsWith('/') ? pathWithoutLang : '/' + pathWithoutLang}`;
}

/**
 * 언어 링크 생성
 * @param {string} pathname - 현재 경로
 * @param {string} currentLang - 현재 언어
 * @returns {Array} 언어 링크 배열
 */
export function generateLanguageLinks(pathname, currentLang = defaultLanguage) {
  try {
    return supportedLanguages.map(lang => ({
      code: lang,
      name: getLanguageName(lang),
      url: translatePath(pathname, lang),
      active: lang === currentLang
    }));
  } catch (error) {
    console.error('Error generating language links:', error);
    return supportedLanguages.map(lang => ({
      code: lang,
      name: getLanguageName(lang),
      url: lang === defaultLanguage ? '/' : `/${lang}/`,
      active: lang === currentLang
    }));
  }
}
