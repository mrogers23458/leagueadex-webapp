import Image from "next/image";
import RiotLogo from "/public/assets/images/riot-games.png";

export default function DefaultImageContainer() {
  return (
    <Image
      priority
      className="image-container"
      height={100}
      width={100}
      src={RiotLogo}
      alt="riot logo"
    />
  );
}
