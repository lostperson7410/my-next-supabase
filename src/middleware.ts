import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['th', 'en'],
  // localePrefix: 'never', // Used when no locale is in the URL
 
  // Used when no locale matches
  defaultLocale: 'th'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/((?!_next).*)', //fix bug
    '/(th|en)/:path*'
  ]
};