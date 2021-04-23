import React from "react"
import { isBrowser } from "utils/env"




export const useIntersectionObserver = (
  ref: React.RefObject<any>,
  { threshold, root, rootMargin }: { threshold: number, root?: Element, rootMargin?: string }
) => {
  // configure the state
  const [state, setState] = React.useState({
    inView: false,
    triggered: false,
    entry: undefined,
  })

  

  React.useEffect(() => {
    const observer = !isBrowser ? null : new IntersectionObserver(
      (entries, observerInstance) => {
        // checks to see if the element is intersecting
        if (entries[0].intersectionRatio > 0) {
          // if it is update the state, we set triggered as to not re-observe the element
          setState({
            inView: true,
            triggered: true,
            entry: observerInstance,
          })
          // unobserve the element
          observerInstance.unobserve(ref.current)
        }
        return
      },
      {
        threshold: threshold || 0,
        root: root || null,
        rootMargin: rootMargin || "0%",
      }
    )

    // check that the element exists, and has not already been triggered
    if (ref.current && !state.triggered) {
      observer?.observe(ref.current)
    }
  },[isBrowser])

  return [state.inView, state.entry]
}