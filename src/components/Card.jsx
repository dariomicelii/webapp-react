import { Link } from "react-router-dom";

export default function Card({ image, title, subtitle, abstract, link }) {
  const cardContent = () => (
    <>
      {image && <img src={image} className="card-img-top" alt={title} />}

      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {subtitle && (
          <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
        )}
        {abstract && <p className="card-text">{abstract}</p>}
      </div>
    </>
  );

  return (
    <div className="card h-100">
      {link.to ? <Link to={link.to}>{cardContent()}</Link> : cardContent()}
    </div>
  );
}

// {link.to && link.text && (
//     <Link to={link.to} className="card-link">
//       {link.text}
//     </Link>
//   )}
