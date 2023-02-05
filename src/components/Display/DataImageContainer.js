import Image from "next/image";

export default function DataImageContainer({ data }) {
  const charName = Object.keys(data)[0];
  const character = data[charName];

  function getDifficulty() {
    if (difficulty === 1) {
      return "Easy";
    }
    if (difficulty === 2) {
      return "Medium";
    }
    if (difficulty === 3) {
      return "Hard";
    }
    if (difficulty === 4) {
      return "Advanced";
    }
  }
  const {
    allytips,
    enemytips,
    info: { attack, defense, magic, difficulty },
    lore,
    passive,
    spells,
    title,
    tags,
  } = character;

  return (
    <div className="data-image-container">
      <div className="data-image-info-container">
        <div className="half center">
          <Image
            priority
            className="data-image"
            height={125}
            width={125}
            alt="riot logo"
            src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${charName}.png`}
          />
        </div>
        <div className="half column-center">
          <p>
            {charName} {title}
          </p>
          <div>
            {tags?.map((tag) => {
              return <p key={tag}>{tag}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="widget-card-container">
        <div className="widget-card-row">
          <div className="widget-card">Player Tips</div>
          <div className="widget-card">How to counter</div>
          <div className="widget-card">More Info</div>
        </div>
        <div className="widget-card-row">
          <div className="widget-card">Lore</div>
          <div className="widget-card">Passive</div>
          <div className="widget-card">Spells & Descriptions</div>
        </div>
      </div>
    </div>
  );
}
