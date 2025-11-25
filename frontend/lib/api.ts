export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`);
  if (!res.ok) throw new Error("API error");
  return res.json();
}