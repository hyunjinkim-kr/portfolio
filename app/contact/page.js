// import {connectDB} from '@/util/database.js'
import Link from "next/link";
// import DetailLink from './DetailLink.js'
// import ListItem from './ListItem.js';

// // 서버 ㅎ
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]"

// 다이나믹 랜더링
export const dynamic = 'force-dynamic'

export default async function Contact() {

  // let session = await getServerSession(authOptions) // 서버컴포넌트, 서버기능안에서 사용가능

  // const db = (await connectDB).db("dbdufqnfsk22")
  // let result = await db.collection('post').find().toArray()
  // result = result.map((a)=>{
  //   a._id = a._id.toString()
  //   return a
  // })
  // return (
    
  //   <div className="list-bg">
  //     <ListItem result={result} session={session}/>
  //   </div>
  // )
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">Contact Me</h1>
        <div className="mb-6">
          <p className="text-lg text-gray-700">Feel free to reach out to me via email or phone:</p>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-gray-700 font-semibold">Email:</p>
            <p className="text-gray-600"><a href="dufqnfsk22@gmail.com">dufqnfsk22@gmail.com</a></p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold">Phone:</p>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/">
            ← <span className="text-blue-600 cursor-pointer hover:underline">Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 


