import { IoLanguage } from "react-icons/io5";

export default function TopSection() {
  return (
    <div className='flex flex-row justify-between'>
      <p className="text-4xl font-semibold text-[#c4c4c4]">Faiq Ghozy Erlangga</p>
      <div className="flex flex-row items-center text-[#818181] hover:text-[#BABABA]">
        <IoLanguage size={"1.2em"}/>
        <p className="ml-2 pr-3">English</p>
      </div>
    </div>
  )
}
