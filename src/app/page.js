import {} from "react-icons/ai";
import {} from "react-icons/bi";
import {} from "react-icons/bs";
import {} from "react-icons/ci";
import {} from "react-icons/di";
import {} from "react-icons/fa";
import {} from "react-icons/fc";
import {} from "react-icons/fi";
import {} from "react-icons/gi";
import {} from "react-icons/go";
import {} from "react-icons/gr";
import {} from "react-icons/hi";
import {} from "react-icons/hi2";
import {} from "react-icons/im";
import {} from "react-icons/io";
import {} from "react-icons/io5";
import {} from "react-icons/md";
import {} from "react-icons/si";
import {} from "react-icons/sl";
import {} from "react-icons/tb";
import {} from "react-icons/ti";
import {} from "react-icons/tfi";
import {} from "react-icons/vsc";
import {} from "react-icons/wi";
import {} from "react-icons/si";
import {} from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home");
  }, [router]);

  return null;
}
