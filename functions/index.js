// Cloudflare Pages Function to handle root path language detection
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // Only handle root path
  if (url.pathname !== '/' && url.pathname !== '') {
    return context.next();
  }
  
  // Get the Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Parse the language preference
  let targetLocale = 'en'; // default
  
  const lowerLang = acceptLanguage.toLowerCase();
  if (lowerLang.includes('zh')) {
    targetLocale = 'zh';
  } else if (lowerLang.includes('ja')) {
    targetLocale = 'ja';
  }
  
  // Redirect to the appropriate language page
  return Response.redirect(new URL(`/${targetLocale}/`, request.url), 302);
}

