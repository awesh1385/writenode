import PageNotFoundImg from "../assets/images/page-not-found.jpg";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";


export const PageNotFound = () => {
  useTitle("PageNotFound");
  return (
   <section className="pageNotFound">
    <p>404 / Page Not Found</p>
    <img src={PageNotFoundImg} alt="" />
    <Link to="/">
      <button>Back To Home</button>
    </Link>
   </section>
  )
}
