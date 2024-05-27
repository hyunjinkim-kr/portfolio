import {connectDB} from '@/util/database.js'
import Link from "next/link";
import DetailLink from './DetailLink.js'
import ListItem from './ListItem.js';
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]"


// 다이나믹 랜더링
export const dynamic = 'force-dynamic'

export default async function Projects() {

  let session = await getServerSession(authOptions)

  const db = (await connectDB).db("dbdufqnfsk22")
  let result = await db.collection('post')
                     .find()
                     .sort({ startDate: -1 })
                     .toArray();
  result = result.map((a)=>{
    a._id = a._id.toString()
    return a
  })
  return (
    
    <div className="flex justify-center items-center"> {/* 부모 요소에 가운데 정렬을 위한 클래스 추가 */}
      <div className="list-bg w-1/2"> {/* ListItem 컴포넌트에 너비 지정 */}
        <ListItem result={result} session={session}/>
      </div>
    </div>
  )
} 


