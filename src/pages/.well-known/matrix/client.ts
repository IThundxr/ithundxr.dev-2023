import type { APIRoute } from "astro";

export const get: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      "m.homeserver": { "base_url": "https://matri.ithundxr.dev" },
      "m.identity_server": { "base_url": "https://vector.im" }
    }),
    { status: 200 }
  );
};
