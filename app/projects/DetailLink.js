
'use client'

import { useParams, usePathname, useRouter } from "next/navigation"

export default function DetailLink() {
  // client 컴포넌트안에서만 useRouter 사용가능
  let router = useRouter()
  console.log(useParams)
  console.log(usePathname)
  return (
    <button onClick={()=>{router.push('/')}}>버튼</button>
  )
}
