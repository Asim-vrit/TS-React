export async function loginService(data: {
  username: string;
  password: string;
}) {
  const res = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "Application/JSON",
    },
  });
  return res;
}
