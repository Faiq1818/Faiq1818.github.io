import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function BottomIcon() {
  return (
    <div className="mt-auto flex justify-center text-[#818181]">
      <FaGithub
        size={"1.2em"}
        className="mx-2 hover:text-[#BABABA] cursor-pointer"
      />
      <FaLinkedin
        size={"1.2em"}
        className="mx-2 hover:text-[#BABABA] cursor-pointer"
      />
      <FaInstagram
        size={"1.2em"}
        className="mx-2 hover:text-[#BABABA] cursor-pointer"
      />
    </div>
  );
}
