import { useState } from "react";
import StarRating from "./StarRating";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "🔼" : "🔽"}
        </button>
        {isOpen && children}
      </div>
      <div className="box">
        <StarRating
          color="green"
          maxRating={3}
          messages={["Nice", "Goo", "Bästa"]}
          size={40}
        />
      </div>
    </>
  );
}
