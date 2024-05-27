import {connectDB} from '@/util/database.js'
import { ObjectId } from 'mongodb'
// dynamic route : 폴더 아래 새로운폴더명을 [작명] 으로.

export default async function Edit(props) {
  const db = (await connectDB).db("dbdufqnfsk22")
  //66474e3979b30fdc17a3384d
  let result = await db.collection('post').findOne({_id :
    new ObjectId(props.params.id)
  })
  
  return (
    <div className="p-10 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg  border border-gray-300">
        <h1 className="text-3xl font-bold mb-6 text-center">Edit</h1>
        <form action="/api/post/edit" method="POST" className="space-y-4">
          {/* POST와 GET만 이렇게 이용가능 */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">글 제목</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              placeholder="글 제목을 입력해주세요." 
              defaultValue={result.title}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2" 
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">글 내용</label>
            <textarea 
              id="content" 
              name="content" 
              rows="5" 
              placeholder="글 내용을 입력해주세요." 
              defaultValue={result.content}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2" 
            ></textarea>
            <input style={{display:'none'}} name="_id" defaultValue={result._id.toString()}/>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
