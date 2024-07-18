import {HeadLoading} from "@/components/headLoading";
import {Header} from "@/components/header";
import {Introduce} from "@/components/introduce";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <HeadLoading/>
      <Header/>
      <Introduce/>
      <div id="modal-root"></div>
    </main>
  );
}
