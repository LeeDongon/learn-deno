const encoder = new TextEncoder();

const text = encoder.encode("hello deno!");

const writed = await Deno.writeFile("hello.txt", text);

console.log(writed);
