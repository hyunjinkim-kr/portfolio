'use client'

import { signIn, signOut } from "next-auth/react"

export default function LogoutBtn() {
  return (
    <button onClick={()=>{ signOut() }}>Logout</button>
  )
}
