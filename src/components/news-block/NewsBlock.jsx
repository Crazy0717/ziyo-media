import { Link } from "react-router-dom"
import { ArticleBox } from "../../ui"
import "./NewsBlock.scss"

const NewsBlock = ({title}) => {

  return (
    <div className="newsBlock">
      <div className="newsBlock_top">
        <h2>{title}</h2>
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
    link: "product/message1",
    title: "Lorem Ipsum is simply dummy",
    imagePath: "/images/Rectangle 12.png",
    date: "16.12.2024 18:09",
    viewCount: "1000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    link: "product/message1",
    title: "Lorem Ipsum is simply dummy",
    imagePath: "/images/Rectangle 12 (1).png",
    date: "16.12.2024 18:09",
    viewCount: "1000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    link: "product/message1",
    title: "Lorem Ipsum is simply dummy",
    imagePath: "/images/Rectangle 12 (2).png",
    date: "16.12.2024 18:09",
    viewCount: "1000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    link: "product/message1",
    title: "Lorem Ipsum is simply dummy",
    imagePath: "/images/Rectangle 12.png",
    date: "16.12.2024 18:09",
    viewCount: "1000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
]
