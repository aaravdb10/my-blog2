// Generic Maintenance Status Serverless Endpoint
export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  let maintenanceMode = false;

  try {
    // Check global env toggle if set
    const rawValue = globalThis?.process?.env?.MAINTENANCE_MODE;
    if (rawValue) {
      maintenanceMode = ["1", "true", "yes", "on"].includes(String(rawValue).toLowerCase());
    }
  } catch (error) {
    console.error("Error checking maintenance status", error);
  }

  return new Response(JSON.stringify({ maintenanceMode }), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store, no-cache, must-revalidate",
    },
  });
}
