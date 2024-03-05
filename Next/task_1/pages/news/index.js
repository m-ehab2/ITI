export default function News({ data }) {
  console.log(data.articles);
  return (
    <div className="px-3 text-center">
      <h1>News Page</h1>
      <div className="d-flex flex-wrap justify-content-evenly ">
        {data.articles.map((element) => {
          return (
            <div
              key={element.url}
              className="card"
              style={{ width: "30%", margin: "10px" }}
            >
              <img
                className="card-img-top"
                src={element.urlToImage}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.description}</p>
                <a href={element.url} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6ee16597a2b04693b5b15e380b3aeeee`
  );
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
