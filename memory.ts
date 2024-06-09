const THRESHOLD = 0.7;

export function getWorkingMemoryRatio(
  { total, available }: { total: number; available: number },
): number {
  return (total - available) / total;
}

export function workingHard(usage: number, threshold: number) {
  return usage >= threshold;
}

export function checkMemoryUsage() {
  const { total, available } = Deno.systemMemoryInfo();

  const usage = getWorkingMemoryRatio({ total, available });

  console.log(
    workingHard(usage, THRESHOLD)
      ? "You are working very hard. I'm sure your future is shining."
      : "You can work harder.",
  );
}
