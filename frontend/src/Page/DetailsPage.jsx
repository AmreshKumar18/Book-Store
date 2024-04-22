import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState();

  return <div className="pt-20">DetailsPage</div>;
};

export default DetailsPage;
