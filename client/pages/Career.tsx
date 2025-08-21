import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Career() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Career Opportunities</CardTitle>
              <CardDescription>
                This page is currently under development
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                We're working on creating detailed content for our Career page. This will include current job openings, company culture, benefits, and application processes.
              </p>
              <div className="pt-4">
                <Button>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {/* Continue prompting to fill in this page */}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
