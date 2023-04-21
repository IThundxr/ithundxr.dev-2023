import type { APIRoute } from "astro";

export const get: APIRoute = async () => {
  return {
    JSON.stringify({
      "m.server": "matrix.ithundxr.dev:443"
    }),
      { status: 200 }
  }
};
