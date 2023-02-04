import { useState } from "react";
import DataImageContainer from "./Display/DataImageContainer";
import DefaultImageContainer from "./Display/DefaultImageContainer";
import TopHeader from "./Header/TopHeader";
import SearchForm from "./SearchForm";

export default function LeagueadexContainer() {
  const [defaultImage, setDefaultImage] = useState(true);
  const [data, setData] = useState(null);
  return (
    <div className="main-container background-main-blue">
      {defaultImage && <DefaultImageContainer />}
      {data && <DataImageContainer data={data} />}
      <TopHeader />
      <SearchForm
        defaultImage={defaultImage}
        setDefaultImage={setDefaultImage}
        data={data}
        setData={setData}
      />
    </div>
  );
}
