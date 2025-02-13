interface Props {
  v?: boolean;
}
const UserIcon = ({ v }: Props) => {
  return (
    <div>

    <div
      className={`flex justify-center items-center ${
        v ?  "bg-[#2FA0C6]":"bg-[#2FA0C6]" 
      }  w-5 h-5 p-4 text-center  rounded-full font-bold text-white`}
    >
      <p className="">{v ? "M" : "F"}</p>
    </div>
    </div>
  );
};

export default UserIcon;
