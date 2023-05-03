export async function fetcher(url, opt = {}) {
  let res;
  if (!opt) {
    res = await fetch(url);
  } else {
    res = await fetch(url, opt);
  }
  const data = await res.json();
  return data;
}
