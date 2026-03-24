
'use client';

import { useState } from 'react';
import { aiAssistedServiceInquiry, AiAssistedServiceInquiryOutput } from '@/ai/flows/ai-assisted-service-inquiry';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Sparkles, Send, HelpCircle, CheckCircle2, Clipboard } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export default function AIInquiryPage() {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AiAssistedServiceInquiryOutput | null>(null);
  const { toast } = useToast();

  const handleInquiry = async () => {
    if (!description.trim()) {
      toast({
        title: "Error",
        description: "Por favor describe tu proyecto para comenzar.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const data = await aiAssistedServiceInquiry({ projectDescription: description });
      setResult(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu solicitud. Intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result?.preliminaryInquiryDraft) {
      navigator.clipboard.writeText(result.preliminaryInquiryDraft);
      toast({
        title: "Copiado",
        description: "El borrador ha sido copiado al portapapeles.",
      });
    }
  };

  return (
    <div className="py-16 bg-background min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex p-3 rounded-full bg-accent/20 text-accent mb-4">
            <Sparkles className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Asistente de Proyectos IA</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Describe qué necesitas para tu empresa y nuestra inteligencia artificial te ayudará a identificar los servicios técnicos ideales de ICSA Ingeniería S.A.
          </p>
        </header>

        <div className="grid gap-8">
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Descripción del Proyecto</CardTitle>
              <CardDescription>
                Puedes mencionar problemas actuales, necesidades de infraestructura o metas de seguridad.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Textarea
                placeholder="Ej: Necesito modernizar el cableado de mi oficina y agregar cámaras de seguridad en el exterior..."
                className="min-h-[150px] text-base"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button 
                onClick={handleInquiry} 
                className="w-full bg-primary py-6 text-lg" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analizando Necesidades...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Generar Diagnóstico de Proyecto
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {result && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
              {/* Suggested Services */}
              <div className="grid gap-6">
                <div className="flex items-center gap-2 text-primary font-bold text-xl">
                  <CheckCircle2 className="text-accent h-6 w-6" />
                  Servicios Sugeridos
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {result.suggestedServices.map((service, i) => (
                    <Card key={i} className="bg-secondary/30 border-none shadow-sm">
                      <CardContent className="p-4 font-medium text-sm text-primary flex items-center gap-2">
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center border-accent text-accent">{i + 1}</Badge>
                        {service}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Clarifying Questions */}
              {result.clarifyingQuestions.length > 0 && (
                <div className="grid gap-4">
                  <div className="flex items-center gap-2 text-primary font-bold text-xl">
                    <HelpCircle className="text-accent h-6 w-6" />
                    Preguntas de Seguimiento
                  </div>
                  <div className="bg-accent/5 border border-accent/20 p-6 rounded-xl space-y-4">
                    <p className="text-sm text-muted-foreground italic">
                      Para brindarte una propuesta más precisa, considera lo siguiente:
                    </p>
                    <ul className="space-y-3">
                      {result.clarifyingQuestions.map((q, i) => (
                        <li key={i} className="text-sm font-medium flex gap-3 text-primary">
                          <span className="text-accent">•</span> {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Preliminary Inquiry Draft */}
              <div className="grid gap-4">
                <div className="flex items-center justify-between text-primary font-bold text-xl">
                  <div className="flex items-center gap-2">
                    <Clipboard className="text-accent h-6 w-6" />
                    Borrador de Solicitud
                  </div>
                  <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-accent hover:text-accent/80">
                    Copiar Borrador
                  </Button>
                </div>
                <div className="bg-card border-2 border-dashed border-muted p-8 rounded-xl relative">
                  <div className="whitespace-pre-wrap text-muted-foreground text-sm leading-relaxed">
                    {result.preliminaryInquiryDraft}
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                   <Button asChild size="lg" className="bg-accent text-primary font-bold">
                      <a href={`mailto:contacto@icsa.cl?subject=Consulta de Proyecto - ICSA Solutions&body=${encodeURIComponent(result.preliminaryInquiryDraft)}`}>
                        Enviar a ICSA ahora
                      </a>
                   </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
