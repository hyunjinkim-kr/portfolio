import Image from "next/image";
import {MongoDBClient} from "mongodb"
import {connectDB} from '@/util/database.js'
import Link from "next/link";

export default async function Home() {

  const client = await connectDB
  const db = client.db("dbdufqnfsk22")
  let result = await db.collection('post').find().toArray()

  return (
    <div className="flex justify-center items-center min-h-screen overflow-y-auto">
      <div className="flex flex-col items-center">
        <div className="mb-8 mt-12"> {/* 이미지 더 아래로 이동 */}
          <img 
            src="/hyunjin_profile.jpg" 
            alt="프로필 사진" 
            className="rounded-full object-cover"
            style={{ width: '320px', height: 'auto', objectFit: 'cover' }} // objectFit 설정 cover  contain
          />
        </div>
        <div className="text-center"> {/* 텍스트를 가운데 정렬하기 위해 추가 */}
          <p className="text-lg text-gray-600 font-semibold mb-4">Hyunjin Kim</p>
          <h1 className="text-3xl font-semibold mb-8">Senior Developer</h1>
          
          <p className="text-base text-gray-500 mb-2">
            With over 5 years of experience in software development, Hyunjin specializes in creating robust and scalable web applications. 
          </p>
          <p className="text-base text-gray-500 mb-2">
            Proficient in modern web technologies, Hyunjin has a deep understanding of both front-end and back-end development processes.
          </p>
          <p className="text-base text-gray-500 mb-2">
            Hyunjin is passionate about learning and sharing knowledge and is actively studying algorithms and languages.
          </p>
          <p className="text-base text-gray-500 mb-20">
            Dedicated to continuous improvement, Hyunjin is always exploring new tools and methodologies to enhance development workflows and team collaboration.
          </p>
          <div className="flex justify-center items-center">
            <p className="text-base text-gray-500 mr-2">GitHub:</p>
            <Link href="https://github.com/hyunjinkim-kr" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.icon-icons.com/icons2/730/PNG/512/github_icon-icons.com_62793.png"
                alt="GitHub Icon"
                className="w-10 h-10 text-gray-300 hover:text-gray-400"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <div>홈화면</div>
  );
}
