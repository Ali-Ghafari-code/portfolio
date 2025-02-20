"use client"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

function notFound() {
  return (
    <div className="flex items-center justify-center h-[500px]">
      <DotLottieReact src="/assets/lottie/404.lottie" loop autoplay />
    </div>
  )
}

export default notFound