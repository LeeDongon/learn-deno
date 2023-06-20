import { copy } from "https://deno.land/std@0.192.0/streams/copy.ts";

const file = await Deno.open("./hello.txt");

await copy(file, Deno.stdout);

file.close();
