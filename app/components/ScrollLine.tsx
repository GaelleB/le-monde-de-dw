"use client"

import { useEffect, useRef, useState } from "react"

export default function ScrollLine() {
  const [progress, setProgress] = useState(0)
  const [emphasisFactor, setEmphasisFactor] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const update = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? window.scrollY / docHeight : 0)
    }

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    const onEmphasis = (e: Event) => {
      setEmphasisFactor((e as CustomEvent<{ factor: number }>).detail.factor)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("line-emphasis", onEmphasis)
    update()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("line-emphasis", onEmphasis)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const lineWidth = 1 + emphasisFactor * 1.5
  const tipSize = 3 + emphasisFactor * 4

  return (
    <div
      aria-hidden="true"
      className="fixed left-8 top-0 h-screen pointer-events-none hidden md:block"
      style={{
        zIndex: 51,
        width: `${lineWidth}px`,
        mixBlendMode: "difference",
        transition: "width 1.2s ease",
      }}
    >
      <div className="absolute inset-0 bg-white/10" />

      <div
        className="absolute top-0 left-0 w-full bg-white"
        style={{
          height: `${progress * 100}%`,
          transition: emphasisFactor > 0.3
            ? "height 0.45s cubic-bezier(0.16, 1, 0.3, 1)"
            : undefined,
        }}
      />

      {progress > 0.005 && progress < 0.998 && (
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white"
          style={{
            top: `${progress * 100}%`,
            width: `${tipSize}px`,
            height: `${tipSize}px`,
            transition: "width 1.2s ease, height 1.2s ease",
          }}
        />
      )}
    </div>
  )
}
