export default async function handler(req, res) {
  if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.
  {

    const {userId}  = req.body;  // Destructuring the info got from the body

    let userIdFinal = 0;
    if(userId === null || userId === "" || userId === undefined)
    {
      userIdFinal = ""
    }else{
      userIdFinal = `?userId=${userId}`
    }
    const res1 = await fetch(
      `https://jsonplaceholder.typicode.com/posts${userIdFinal}`,
      {
        headers: {
          "rajdeep-codedamn-project": "jsonproxyholder",
        },
      }
    );
    const data = await res1.json();
    res.status(200).json(data);

  }
}
