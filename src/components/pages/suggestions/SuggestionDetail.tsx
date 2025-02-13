import { HiArrowSmallLeft } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"

const SuggestionDetail = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-black/50 fixed inset-0 z-20">
            <div className="bg-white fixed inset-0 sm:ml-32 md:ml-60">
                <div className="p-5">
                <HiArrowSmallLeft size={26} className="text-[#00628B] cursor-pointer" onClick={()=>navigate(-1)} />

                </div>
            </div>
        </div>
    )
}

export default SuggestionDetail
