import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Mail, MapPin, Phone, Share } from "lucide-react"
import NavBar from "@/components/navBar"
import Footer from "@/components/footer"
import { properties } from "@/lib/properties"

export default function PropertyDetailPage() {
  const { id } = useParams()
  
  if (!id) {
    return <div>Property ID not found</div>
  }

  const property = properties.find(p => p.id === id)

  if (!property) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">
          <div className="container px-4 py-6 md:px-6 md:py-8">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/properties">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Properties
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold">Property Not Found</h1>
              <p className="text-muted-foreground mt-2">The property you're looking for doesn't exist.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/properties">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Properties
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">{property.title}</h1>
                <div className="flex items-center mt-2 text-muted-foreground rounded-xl p-2 justify-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  {property.location}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Property Details</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Property Type</div>
                    <div>{property.type}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Monthly Rent</div>
                    <div>R{property.price}.00</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Sharing</div>
                    <div>{property.sharing}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Utilities Included</div>
                    <div>{property.utilities.join(", ") || "None"}</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Description</h2>
                <p>{property.description}</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <Badge key={index} variant="outline">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Landlord</CardTitle>
                  <CardDescription>Interested in this property? Contact the landlord directly.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Landlord</div>
                    <div>{property.landlord.name}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Preferred Contact Method</div>
                    <div>{property.landlord.preferredContact}</div>
                  </div>

                  <div className="grid gap-4 pt-4">
                    <Button className="w-full gap-2">
                      <Mail className="h-4 w-4" />
                      Email Landlord
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      Call Landlord
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  Property listed on {property.datePosted}
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Viewing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Contact the landlord to schedule a viewing</span>
                  </div>
                  <Button className="w-full">Request Viewing</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Share This Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <Share className="h-4 w-4" />
                    Share Listing
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
