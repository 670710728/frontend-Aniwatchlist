
import { useParams } from "react-router-dom";

function AnilistDetail() {
  const { id } = useParams();

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold">
        Anilist Detail
      </h1>

      <p>Movie ID: {id}</p>
    </div>
  );
}

export default AnilistDetail;
