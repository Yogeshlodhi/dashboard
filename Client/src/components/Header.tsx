import { Bell, CircleHelp, MessageSquareMore, Search, Settings2 } from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


const Header = () => {
  return (
    <div className="flex justify-between gap-28 items-center px-8 pt-4 pb-2">
      <div className="relative w-[60%]">
        <Search className="absolute left-3 top-2.5 text-[#3F526E]" />
        <Input
          type="text"
          placeholder="Search Your Course"
          className="p-4 pl-10 border rounded-md w-full bg-white h-[40px] outline-none border-none"
        />
      </div>

      <div className="flex items-center justify-between w-[40%]">
        <CircleHelp color="#3F526E" cursor={"pointer"}/>
        <MessageSquareMore color="#3F526E"  cursor={"pointer"}/>
        <Settings2 color="#3F526E" cursor={"pointer"}/>
        <Bell color="#3F526E" cursor={"pointer"}/>

        <div className="flex justify-between items-center gap-3">
          <Avatar className="w-8 h-8 rounded-md cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Logo</AvatarFallback>
          </Avatar>
          <h1 className="font-bold">Yogesh Kumar</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
