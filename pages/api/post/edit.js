import {connectDB} from '@/util/database.js'
import { Content } from 'next/font/google'
import { ObjectId } from 'mongodb'

// 방법 1. app 폴더에 api라는 폴더를 만들어서 안에 서버기능 만들기
// -- 신버전 문법이지만 안되는 기능이 있을 수 있다.

// ** 방법 2. pages\api > server.js 만들기
// 누군가 api/server/ GET POST PUT DELETE PATCH 를 요청하면 여기서 get요청 코드를 실행해준다.
export default async function handler(req, res){
  
  // get 요청이 받은후, 응답을 해주자
  if(req.method == 'POST'){
    if(req.body.title == ''){
      return res.status(500).json('제목을 입력해주세요')
    }

    let data = {
      title: req.body.title, 
      content: req.body.content
    }
    
    const db = (await connectDB).db("dbdufqnfsk22")
    let updateOne = await db.collection('post').updateOne(
      {_id : new ObjectId(req.body._id)},
      {$set : data}
      // 증감하고싶으면 $inc라는것도 가능
    )
    return res.status(200).redirect('/projects')

  }else{
    return res.status(200).json('GET 성공')
  }
}