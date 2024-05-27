import {connectDB} from '@/util/database.js'
import { ObjectId } from 'mongodb'
import Link from "next/link";
// import Comment from './Comment'
import { notFound } from 'next/navigation'
// dynamic route : 폴더 아래 새로운폴더명을 [작명] 으로.

export default async function Detail(props) {
  const db = (await connectDB).db("dbdufqnfsk22")
  //66474e3979b30fdc17a3384d
  let result = await db.collection('post').findOne({_id :
    new ObjectId(props.params.id)
  })

  // if(result ===null){
  //   return <div>없는 페이지입니다.</div>
  //   // --> not-found.js 만들자
  // }
  if(result ===null){
    return notFound()
  }
  
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h4 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-300">{result.title}</h4>
      <p className="text-lg mb-8 pb-4 border-b border-gray-300">
        <span className="font-semibold">Period:</span> {result.startDate} ~ {result.endDate}
      </p>
      <p className="text-gray-700 whitespace-pre-line">{result.content}</p>
      <div className="mt-8 flex justify-between">
        <div className="flex items-center">
          <Link href="/projects">
            <span className="flex items-center text-blue-600 cursor-pointer hover:underline">
              <span>  ← Back to List</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
