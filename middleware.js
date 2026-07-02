// Generic Vercel Middleware
export const config = {
  matcher: ["/((?!api|assets|images|favicon.ico|robots.txt|sitemap.xml).*)"],
};

export default async function middleware(request) {
  const url = new URL(request.url);
  const isMaintenancePath = url.pathname === "/maintenance";
  
  let maintenanceMode = false;
  try {
    const rawValue = globalThis?.process?.env?.MAINTENANCE_MODE;
    if (rawValue) {
      maintenanceMode = ["1", "true", "yes", "on"].includes(String(rawValue).toLowerCase());
    }
  } catch (error) {
    // Fail safe
  }

  if (maintenanceMode && !isMaintenancePath) {
    return Response.redirect(new URL("/maintenance", url), 307);
  }

  if (!maintenanceMode && isMaintenancePath) {
    return Response.redirect(new URL("/", url), 307);
  }

  return fetch(request);
}
