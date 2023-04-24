import { FaCat, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import img1 from "../assets/bave-pictures-oPi1pFSBXJg-unsplash.jpg";
import img2 from "../assets/celine-sayuri-tagami-2s6ORaJY6gI-unsplash.jpg";
import img3 from "../assets/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg";
import img4 from "../assets/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.jpg";
import img5 from "../assets/sigmund-jzz_3jWMzHA-unsplash.jpg";
import img6 from "../assets/timothy-dykes-yd4ubMUNTG0-unsplash.jpg";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/sitters",
    text: "sitters",
  },
  {
    id: 4,
    url: "/owners",
    text: "owners",
  },
  {
    id: 5,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.cats.org.uk",
    icon: <FaCat />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/benjamin-seed/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.github.com/",
    icon: <FaGithub />,
  },
];

export const sitters = [
  {
    id: 1,
    image: img1,
    sitterName: "Timmy",
    review: "Great Guy, looked after Biscuit with no issues!",
    icon: (
      <>
        {[...Array(5)].map((_, i) => (
          <RiStarSFill key={i} />
        ))}
      </>
    ),
  },
  {
    id: 2,
    image: img2,
    sitterName: "Celine",
    review:
      "Don't know what I was thinking hiring a dog to look after my cat. Nightmare",
    icon: (
      <>
        {[...Array(1)].map((_, i) => (
          <RiStarSFill key={i} />
        ))}
      </>
    ),
  },
  {
    id: 3,
    image: img3,
    sitterName: "Susie",
    review:
      "Fantastic service. Susie gave us great peace of mind, will hire again!",
    icon: (
      <>
        {[...Array(5)].map((_, i) => (
          <RiStarSFill key={i} />
        ))}
      </>
    ),
  },
  {
    id: 4,
    image: img4,
    sitterName: "Jose",
    review: "Should have listened to the other guy...",
    icon: (
      <>
        {[...Array(2)].map((_, i) => (
          <RiStarSFill key={i} />
        ))}
      </>
    ),
  },
  {
    id: 5,
    image: img5,
    sitterName: "Celine",
    review: "Wonderful service!",
    icon: (
      <>
        {[...Array(4)].map((_, i) => (
          <RiStarSFill key={i} />
        ))}
      </>
    ),
  },
  {
    id: 6,
    image: img6,
    sitterName: "Timothy",
    review: "Rally enthusiastic guy who loves cats and clearly loves his job!",
    icon: (
      <>
        {[...Array(5)].map((_, i) => (
          <RiStarSFill key={i} />
        ))}
      </>
    ),
  },
];
