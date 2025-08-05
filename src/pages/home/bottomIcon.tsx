import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function BottomIcon() {
  return (
    <div className="mt-auto flex justify-center text-[#818181]">
      <a href="https://github.com/Faiq1818">
        <FaGithub
          size={"1.2em"}
          className="mx-2 hover:text-[#BABABA] cursor-pointer"
        />
      </a>
      <a href="https://www.linkedin.com/in/faiq-ghozy-erlangga-378b19321/">
        <FaLinkedin
          size={"1.2em"}
          className="mx-2 hover:text-[#BABABA] cursor-pointer"
        />
      </a>
      <a href="https://www.instagram.com/faiqghozyerlangga/">
        <FaInstagram
          size={"1.2em"}
          className="mx-2 hover:text-[#BABABA] cursor-pointer"
        />
      </a>
    </div>
  );
}
