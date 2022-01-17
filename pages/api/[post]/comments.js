export default async function handler(req, res) {
    const {post} = req.query;
  const res1 = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post}/comments`,
    {
      method: "GET",
      headers: {
        "x-codedamn-project": "jsonproxyholder",
      },
    }
  );
  const data = await res1.json();
  res.status(200).json(data);
}
