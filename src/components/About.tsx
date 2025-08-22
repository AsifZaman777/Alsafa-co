import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, MapPin, TrendingUp } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Recognized leader in international trade with certified quality standards."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals with decades of combined experience in global logistics."
    },
    {
      icon: MapPin,
      title: "Strategic Locations",
      description: "Offices and warehouses strategically positioned in major trade hubs worldwide."
    },
    {
      icon: TrendingUp,
      title: "Proven Growth",
      description: "Consistent year-over-year growth helping businesses expand internationally."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                About ALSAFA Export Import Co.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With years of experience in international trade, ALSAFA Export Import Co. 
                has established itself as a trusted partner for businesses looking to expand 
                their global reach. We specialize in seamless import and export operations 
                across multiple industries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to excellence, combined with our extensive global network, 
                ensures that your goods reach their destination safely, on time, and 
                cost-effectively.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Comprehensive trade documentation and compliance",
                  "Competitive pricing with transparent cost structure",
                  "Real-time tracking and shipment monitoring",
                  "24/7 customer support in multiple languages",
                  "Insurance coverage and risk management"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground shadow-elegant"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-secondary rounded-full w-fit group-hover:bg-primary transition-colors duration-300">
                    <achievement.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;