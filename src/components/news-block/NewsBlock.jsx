import { Link } from "react-router-dom"
import { ArticleBox } from "../../ui"
import "./NewsBlock.scss"

const NewsBlock = () => {
  return (
    <div className="newsBlock">
      <div className="newsBlock_top">
        <h2>Xabarlar</h2>

        <Link to={"/messages"}>
          <button>Barchasini ko’rish</button>
        </Link>
      </div>
      <div className="newsBlock_content">
        {mockData &&
          mockData.map((item, i) => <ArticleBox key={i} item={item} />)}
      </div>
    </div>
  )
}

export default NewsBlock

const mockData = [
  {
    imagePath: "/images/Rectangle 12.png",
  },

  {
    imagePath: "/images/Rectangle 12 (1).png",
  },
  {
    imagePath: "/images/Rectangle 12 (2).png",
  },
  {
    imagePath: "/images/Rectangle 12.png",
  },
]
