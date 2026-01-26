import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

interface ShopItem {
  id: string
  title: string
  subtitle: string
  image: string
  formUrl: string
}

const shopItems: ShopItem[] = [
  {
    id: "pew-sticker",
    title: "pew pew pew pew!",
    subtitle: "bitch slap ICE (stickers)",
    image: "/images/shop-pew-sticker.png",
    formUrl: "https://vfafvpth.formester.com/f/SzlCFUxy1",
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="max-w-[1024px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-medium mb-8">Shop</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopItems.map((item) => (
            <Link
              key={item.id}
              href={item.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="overflow-hidden border border-border hover:border-foreground/30 transition-colors">
                <div className="aspect-square relative bg-muted">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="font-medium text-base">{item.title}</h2>
                      <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
