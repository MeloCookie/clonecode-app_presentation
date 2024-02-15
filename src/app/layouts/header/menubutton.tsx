import {MenuList} from "@/app/layouts/header/menu";
import {SNSList} from "@/app/layouts/header/snslink";
import MenuIcon from '@mui/icons-material/Menu';
import {useState, useCallback, useEffect} from "react";

export default function MenuButton(){
  const [toggle, setToggle] = useState(false)
  const Click = useCallback(() => {
    setToggle(val => !val)
  }, [])

  return (
    <button
      className="mr-10"
      onClick={Click}
    >
      <MenuIcon />
    </button>
  )
}