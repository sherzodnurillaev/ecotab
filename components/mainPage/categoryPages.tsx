import { Suspense } from "react"
import CategoryPagesClient from "./CategoryPagesClient"

export default function CategoryPages(props: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryPagesClient {...props} />
    </Suspense>
  )
}