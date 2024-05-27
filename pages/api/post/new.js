import {connectDB} from '@/util/database.js'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

// 방법 1. app 폴더에 api라는 폴더를 만들어서 안에 서버기능 만들기
// -- 신버전 문법이지만 안되는 기능이 있을 수 있다.

// ** 방법 2. pages\api > server.js 만들기
// 누군가 api/server/ GET POST PUT DELETE PATCH 를 요청하면 여기서 get요청 코드를 실행해준다.
export default async function handler(req, res){

  let session = await getServerSession(req,res,authOptions)
  if(session){
    req.body.author = session.user.email;
  }

  if(req.method == 'POST'){

    if(req.body.title == ''){
      return res.status(500).json('제목을 입력해주세요')
    }
    try{
      const db = (await connectDB).db("dbdufqnfsk22")
      // let result = await db.collection('post').find().toArray()
      let insertOne = await db.collection('post').insertOne(req.body)
      return res.status(200).redirect('/projects')
    } catch(err){
      return res.status(500).json('먼가 문제생김')
    }
  }else{
    return res.status(200).json('GET 성공')
  }
  
}