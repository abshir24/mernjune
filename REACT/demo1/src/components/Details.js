var items = [
    {
      id:1,
      name:"Pinball Machine",
      description: "This is a Pinball Machine"
    },
    {
        id:2,
        name:"Coffee mug",
        description: "This is a coffee mug"
    },
    {
      id:3,
      name:"Laptop",
      description: "This is a laptop"
    }
]

function Detail(){
    const params = useParams()
    let item = items.find((item) => item.id == params.id)
  
    return <div>
      <h2>Id: {item.id}</h2>
      <h2>Name: {item.name}</h2>
      <h2>description: {item.description}</h2>
    </div>
}
  