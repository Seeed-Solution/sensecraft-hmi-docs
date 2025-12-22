import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { pathname } = context.url;
  
  // Only redirect on the root path
  if (pathname === '/' || pathname === '') {
    // Get the Accept-Language header
    const acceptLanguage = context.request.headers.get('accept-language') || '';
    
    // Parse the language preference
    let targetLocale = 'en'; // default
    
    if (acceptLanguage.includes('zh')) {
      targetLocale = 'zh';
    } else if (acceptLanguage.includes('ja')) {
      targetLocale = 'ja';
    }
    
    // Redirect to the appropriate guide page
    const targetPath = `/${targetLocale}`;
    return context.redirect(targetPath, 302);
  }
  
  // For all other paths, continue normally
  return next();
};