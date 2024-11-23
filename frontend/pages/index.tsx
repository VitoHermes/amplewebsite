import Image from "next/image";
import {client} from '../lib/sanityClient'

export default function Home({data}: {data: any}) {
  console.log(data)
  return (
    <div>
      homepage
    </div>
  );
}

export async function getStaticProps() {
  const data = await client.fetch('*[_type == "post"]')
  console.log(data)
  return {
    props: {data},
  }
}