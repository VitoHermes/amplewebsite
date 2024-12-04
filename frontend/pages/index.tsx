import Image from "next/image";
import { client } from '../lib/sanityClient'

import Header from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import HomeTitle from "../components/home/HomeTitle.jsx"
import HomeDetails from "../components/home/HomeDetails.jsx"
import HomeNews from "../components/home/HomeNews.jsx"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="mt-24 w-full">
        <HomeTitle />
        <HomeDetails />
        <HomeNews />
      </div>

      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  const data = await client.fetch('*[_type == "post"]')
  console.log(data)
  return {
    props: { data },
  }
}