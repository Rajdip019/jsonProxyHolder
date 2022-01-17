export default async function handler(req, res) {
      const res1 = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          headers: {
            "rajdeep-codedamn-project": "jsonproxyholder",
          },
        }
      );
      const data = await res1.json();
      res.status(200).json(data);
  }