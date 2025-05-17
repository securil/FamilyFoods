// src/i18n/i18n-utils.js - 단순화된 다국어 유틸리티

import { supportedLanguages, defaultLanguage } from './index.js';
import ko from './ko.js';
import en from './en.js';
import zh from './zh.js';
import vi from './vi.js';
import th from './th.js';
import ja from './ja.js';

// 언어별 번역 데이터
const translations = { ko, en, zh, vi, th, ja };

// 언어별 이름 및 국기 경로
const languageInfo = {
  ko: { name: '한국어', flag: '/images/flag-ko.svg' },
  en: { name: 'English', flag: '/images/flag-en.svg' },
  zh: { name: '中文', flag: '/images/flag-cn.svg' },
  vi: { name: 'Tiếng Việt', flag: '/images/flag-vi.svg' },
  th: { name: 'ภาษาไทย', flag: '/images/flag-th.svg' },
  ja: { name: '日本語', flag: '/images/flag-ja.svg' }
};

/**
 * 현재 URL에서 언어 코드 추출 (베이스 경로 고려)
 */
function getLanguageFromURL(pathname) {
  if (!pathname || typeof pathname !== 'string') {
    return defaultLanguage;
  }
  
  // 베이스 경로 제거
  const base = '/FamilyFoods';
  let cleanPathname = pathname;
  if (pathname.startsWith(base)) {
    cleanPathname = pathname.substring(base.length);
  }
  
  const segments = cleanPathname.split('/').filter(Boolean);
  const firstSegment = segments[0] || '';
  
  return supportedLanguages.includes(firstSegment) ? firstSegment : defaultLanguage;
}

/**
 * 다른 언어로의 URL 생성 (베이스 경로 포함)
 */
function translatePath(pathname, targetLang) {
  // 베이스 경로 가져오기 (환경변수 또는 고정값)
  const base = '/FamilyFoods';
  
  if (!pathname || typeof pathname !== 'string') {
    return targetLang === defaultLanguage 
      ? `${base}/` 
      : `${base}/${targetLang}/`;
  }
  
  // 경로에서 베이스 경로 제거 (만약 포함되어 있다면)
  let cleanPathname = pathname;
  if (pathname.startsWith(base)) {
    cleanPathname = pathname.substring(base.length);
  }
  
  const segments = cleanPathname.split('/').filter(Boolean);
  const firstSegment = segments[0] || '';
  const isLangPath = supportedLanguages.includes(firstSegment);
  const pathWithoutLang = isLangPath ? '/' + segments.slice(1).join('/') : cleanPathname;
  
  return targetLang === defaultLanguage
    ? `${base}${pathWithoutLang}`
    : `${base}/${targetLang}${pathWithoutLang.startsWith('/') ? pathWithoutLang : '/' + pathWithoutLang}`;
}

/**
 * 번역 함수
 */
function translate(key, lang) {
  const currentLang = supportedLanguages.includes(lang) ? lang : defaultLanguage;
  const langData = translations[currentLang] || translations[defaultLanguage];
  
  // 키를 점 표기법으로 분할하여 중첩된 객체에서 값 찾기
  const keys = key.split('.');
  let value = langData;
  
  try {
    for (const k of keys) {
      if (value && Object.hasOwnProperty.call(value, k)) {
        value = value[k];
      } else {
        console.warn(`번역 키 '${key}'가 '${lang}' 언어에 없습니다.`);
        return key;
      }
    }
    return value;
  } catch (error) {
    console.error('번역 오류:', error);
    return key;
  }
}

/**
 * 언어 선택 링크 생성
 */
function generateLanguageLinks(pathname, currentLang) {
  return supportedLanguages.map(lang => ({
    code: lang,
    name: languageInfo[lang]?.name || lang,
    flag: languageInfo[lang]?.flag || '',
    url: translatePath(pathname, lang),
    active: lang === currentLang
  }));
}

/**
 * 현재 페이지 경로에 맞는 다국어 도우미 함수 생성
 */
export function createI18nHelpers(pathname) {
  const currentLocale = getLanguageFromURL(pathname);
  
  return {
    currentLocale,
    t: (key) => translate(key, currentLocale),
    getLanguageLinks: () => generateLanguageLinks(pathname, currentLocale)
  };
}

// 기본 다국어 도우미
export const defaultI18nHelpers = createI18nHelpers('/');

