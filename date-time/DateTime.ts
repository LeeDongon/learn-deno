import {
  dayOfYear,
  format,
} from "https://deno.land/std@0.192.0/datetime/mod.ts";

const day: number = dayOfYear(new Date("2023-06-16"));
console.log(day);

const formattedDay: string = format(new Date(2023, 6, 16), "dd-MM-yyyy");
console.log(formattedDay);
