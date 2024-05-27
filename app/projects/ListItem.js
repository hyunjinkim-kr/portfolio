'use client'

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation"

export default function ListItem(props){

  let router = useRouter()

  // useEffect(()=>{ 
  //   // 서버에 부탁해서 DB게시물을 가져오자..
  //  get방식으로 가져온걸 result에 넣는게 방법이긴한데, 검색엔진에 적합치않다.
  // },[])
  let author;
  if(props.session){
    author = props.session.user.email; 
  }

  return(
    <div>
      {
        props.result.map((a,i)=>{
          //console.log(a._id.toHexString())
          return(
            <div className="list-item" key={i}>
              <Link href={`/detail/${props.result[i]._id}`}>
                <h4>{props.result[i].title}</h4>
              </Link>
              <p>{props.result[i].startDate + " ~ " + props.result[i].endDate}</p>
              {/* <DetailLink/> */}
              {author==props.result[i].author && (
                <>
                <Link href={`/edit/${props.result[i]._id}`} >✏️</Link>
                  <span className="cursor-pointer text-red-500 hover:text-red-700"
                  onClick={(e)=>{
                    fetch('/api/post/delete',{
                      method : 'DELETE',
                      body : props.result[i]._id
                    })
                    .then((r)=> r.json())
                    .then(()=>{ 
                      //성공시 실행할코드
                      e.target.parentElement.style.opacity = 0;
                      setTimeout(()=>{
                        e.target.parentElement.style.display = 'none';
                      },1000)
                    })
                  }}>🗑️</span>
                </>
            )}
            </div>
          )
        })
      }
    <button 
      className="write-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fixed bottom-10 right-10"
      onClick={() => {router.push('/write')}}
    >
      📝 New
    </button>
    </div>
  )
}