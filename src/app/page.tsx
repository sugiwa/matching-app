import Image from "next/image";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import GroupCard from "./components/GroupCard/GroupCard";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <NavBar />
        <main>test

          <GroupCard></GroupCard>
        </main>
      </div>
    </div>
  );
}
