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
      <div className="border-white container">
        <div className="border-white half center">
          <Image
            priority
            className="data-image"
            height={150}
            width={150}
            alt="riot logo"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${charName}_0.jpg`}
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
        <p className="widget-card">Player Tips</p>
        <p className="widget-card">How to counter</p>
        <p className="widget-card">More Info</p>
        <p className="widget-card">Lore</p>
        <p className="widget-card">Passive</p>
        <p className="widget-card">Spells & Descriptions</p>
      </div>
    </div>
  );
}
