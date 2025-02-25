import { CiUser } from "react-icons/ci";
interface Props {
  username?: String;
  v?: Boolean;
  size?: Number;
}
const UserIcon = ({ username, size=5 }: Props) => {
  return (
    <div>

    <div
      className={`flex justify-center items-center bg-[#2FA0C6] 
        w-${size} h-${size} p-4 text-center  rounded-full font-bold text-white`}
    >
      <p className="">{username? username?.charAt(0).toLocaleUpperCase(): <CiUser />}</p>
    </div>
    </div>
  );
};

export default UserIcon;
