import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ship, Truck, FileText, Shield, Clock, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Reliable sea cargo services for bulk shipments worldwide with competitive rates.",
      features: ["FCL & LCL Options", "Port-to-Port Delivery", "Customs Clearance"]
    },
    {
      icon: Truck,
      title: "Land Transportation",
      description: "Efficient overland transport solutions across continents with real-time tracking.",
      features: ["Door-to-Door Service", "Express Delivery", "Secure Handling"]
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete trade documentation and compliance support for smooth operations.",
      features: ["Export Licenses", "Certificates of Origin", "Bill of Lading"]
    },
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage to protect your valuable shipments.",
      features: ["Full Coverage", "Quick Claims", "Global Protection"]
    },
    {
      icon: Clock,
      title: "Supply Chain",
      description: "End-to-end supply chain management for optimized logistics solutions.",
      features: ["Inventory Management", "Just-in-Time Delivery", "Cost Optimization"]
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive worldwide network of trusted partners and agents.",
      features: ["50+ Countries", "Local Expertise", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Export Import Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive logistics solutions designed to streamline your global trade operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;