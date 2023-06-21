import { Application } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import router from "./routes.ts";

const portNumber = 8080;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`server listening port ${portNumber}`);
await app.listen({
  port: portNumber,
});
