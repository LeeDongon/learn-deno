import { serve } from "https://deno.land/std@0.192.0/http/mod.ts";

console.log("http:localhost:8080");

serve(() => new Response("Hello deno\n"), { port: 8080 });
