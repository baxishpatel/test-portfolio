import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create mailto link with form data
    const subject = formData.subject || 'Portfolio Contact';
    const body = `Hi Baxish,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`;

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="contact-title">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600" data-testid="contact-subtitle">
            Let's discuss how I can contribute to your team's success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6" data-testid="contact-info-title">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center" data-testid="contact-email">
                  <Mail className="text-blue-600 mr-4" size={24} />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-phone">
                  <Phone className="text-blue-600 mr-4" size={24} />
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-location">
                  <MapPin className="text-blue-600 mr-4" size={24} />
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <span className="text-gray-600">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8" data-testid="current-status">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Current Status</h4>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Currently employed at Kansas Turnpike Authority</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Open to new opportunities</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6" data-testid="contact-form-title">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  className="w-full"
                  data-testid="input-name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full"
                  data-testid="input-email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="How can I help you?"
                  className="w-full"
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="w-full resize-none"
                  data-testid="textarea-message"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                data-testid="button-submit-contact"
              >
                <Send className="mr-2" size={16} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-4" data-testid="footer-name">
              {personalInfo.name}
            </div>
            <p className="text-gray-400 mb-6" data-testid="footer-title">
              {personalInfo.title}
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                data-testid="footer-email"
              >
                <Mail size={24} />
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                data-testid="footer-phone"
              >
                <Phone size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm" data-testid="footer-copyright">
                © 2024 {personalInfo.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
