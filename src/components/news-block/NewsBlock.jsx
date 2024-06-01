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
        <ArticleBox imagePath="/images/Rectangle 12.png" />
        <ArticleBox imagePath="/images/Rectangle 12 (1).png" />
        <ArticleBox imagePath="/images/Rectangle 12 (2).png" />
        <ArticleBox imagePath="/images/Rectangle 12.png" />
      </div>
    </div>
  )
}

export default NewsBlock
