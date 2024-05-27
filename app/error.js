'use client'

export default function Error(props){ //{error, reset}
  return(
    <>
      <h4>에러가 났습니다.</h4>
      <button onClick={()=>{props.reset()}}>재접속</button>
    </>
  )
}