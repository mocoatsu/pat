import { getWorkingMemoryRatio, workingHard } from "./memory.ts";
import { assertEquals } from "https://deno.land/std@0.65.0/testing/asserts.ts";

Deno.test("getWorkingMemoryRatio() returns ratio of usage memory", () => {
  assertEquals(getWorkingMemoryRatio({ total: 100, available: 30 }), 0.7);
  assertEquals(getWorkingMemoryRatio({ total: 100, available: 80 }), 0.2);
});

Deno.test("workingHard() returns if memory is working hard", () => {
  assertEquals(workingHard(0.4, 0.39), true);
  assertEquals(workingHard(0.4, 0.4), true);
  assertEquals(workingHard(0.4, 0.41), false);
});
