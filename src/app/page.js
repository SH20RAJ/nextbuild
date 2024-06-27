import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>
      <Link href={"/new"}>New</Link>
      <br />
      <Link href={"/new2"}>New2</Link>
    </div>
    </>
  );
}
