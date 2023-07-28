import "../components/home/home.scss";

import Welcome from "@/components/home/Welcome";
import HomeNav from "@/components/home/HomeNav";
import ChatFooter from "@/components/common/ChatFooter";

export default function Home() {
  return (
    <div>
      {/* <Welcome /> */}
      <HomeNav />
      <ChatFooter />
    </div>
  );
}
