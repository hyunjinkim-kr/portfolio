import {connectDB} from '@/util/database.js'
import { ObjectId } from 'mongodb'

export default async function handler(req, res){
  
  // get 요청이 받은후, 응답을 해주자
  console.log(req.body)
  if(req.method == 'DELETE'){
    
    const db = (await connectDB).db("dbdufqnfsk22")
    let deleteOne = await db.collection('post').deleteOne(
      {_id : new ObjectId(req.body)}
    )
    return res.status(200).json('DELETE 성공')
  }else{
    return res.status(200).json('GET 성공')
  }
}