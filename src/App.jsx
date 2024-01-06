import Item from "./components/Item"

function App() {
  return (
    <>
      <div className="">

      </div>

      <div className="grid grid-cols-1 grid-rows-1 gap-4 place-items-center">
        <Item title={"Kebap"} price={"100₺"} img={"https://cdn.yemek.com/mnresize/1250/833/uploads/2023/04/sis-kebap-onecikan.jpg"} />
        <Item title={"Döner"} price={"85₺"} img={"https://www.karaca.com/blog/wp-content/uploads/2023/02/tavuk-donerr.webp"} />
        <Item title={"Künefe"} price={"120₺"} img={"https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/kunefe-reels-yemekcom-1.jpg"} />
        <Item title={"Trileçe"} price={"70₺"} img={"https://cdn.shopify.com/s/files/1/1259/6441/files/trilece-tatlisi-tarifi.jpg?v=1598011389"} />
      </div>
    </>

  )
}

export default App
