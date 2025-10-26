import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest, NextResponse } from "next/server";

// Create the handlers
const { POST: originalPOST, GET: originalGET } = toNextJsHandler(auth);

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_FRONTEND_URL || "https://notly-six.vercel.app",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, Cookie",
  "Access-Control-Allow-Credentials": "true",
};

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

// Wrap the original handlers with CORS headers
export async function GET(request: NextRequest) {
  const response = await originalGET(request);
  
  // Add CORS headers to the response
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  return response;
}

export async function POST(request: NextRequest) {
  const response = await originalPOST(request);
  
  // Add CORS headers to the response
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  return response;
}