
"use client";

import { useFormState } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';

const Contact = () => {

  return (
    <Card className="max-w-2xl mx-auto bg-card border-border">
      <CardContent className="p-6 md:p-8 text-center">
        <div className="flex flex-col items-center gap-6">
            <div className="bg-white p-2 rounded-lg">
                 <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mailto:ravindu.lakmina1@gmail.com"
                    alt="Email QR Code"
                    width={150}
                    height={150}
                />
            </div>
            <p className="text-muted-foreground">Scan the code or click the button below to send me an email.</p>
             <Button asChild size="lg">
              <a href="mailto:ravindu.lakmina1@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                ravindu.lakmina1@gmail.com
              </a>
            </Button>

            <div className="flex items-center gap-4 mt-4">
                 <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                </Button>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
