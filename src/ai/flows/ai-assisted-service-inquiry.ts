'use server';
/**
 * @fileOverview An AI assistant for generating service inquiries based on user project descriptions.
 *
 * - aiAssistedServiceInquiry - A function that processes user project needs to suggest ICSA services,
 *   ask clarifying questions, and generate a preliminary inquiry draft.
 * - AiAssistedServiceInquiryInput - The input type for the aiAssistedServiceInquiry function.
 * - AiAssistedServiceInquiryOutput - The return type for the aiAssistedServiceInquiry function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ICSA_SERVICES = [
  'Ingeniería de proyectos de comunicaciones',
  'Instalación de sistemas de seguridad y CCTV',
  'Estudios de instalaciones eléctricas',
  'Estudios de redes de corrientes débiles',
  'Planificación y diseño de redes',
  'Análisis de redes (LAN y WAN)',
  'Implementación de infraestructura tecnológica (salas de servidores, racks, UPS, etc.)',
  'Cableado estructurado (UTP y fibra óptica)',
  'Certificación de redes',
  'Diseño y cálculo de proyectos eléctricos',
  'Suministro de equipos y accesorios de comunicación de datos',
];

const AiAssistedServiceInquiryInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A natural language description of the client\'s project needs.'),
});
export type AiAssistedServiceInquiryInput = z.infer<
  typeof AiAssistedServiceInquiryInputSchema
>;

const AiAssistedServiceInquiryOutputSchema = z.object({
  suggestedServices: z
    .array(z.string())
    .describe(
      'A list of relevant ICSA Ingeniería S.A. services based on the project description.'
    ),
  clarifyingQuestions: z
    .array(z.string())
    .describe(
      'A list of questions the AI needs to ask to gather more information for a precise inquiry. This should be empty if enough information is provided.'
    ),
  preliminaryInquiryDraft: z
    .string()
    .describe(
      'A draft of a preliminary inquiry message for the client to send to ICSA Ingeniería S.A. This should be a full draft only if clarifying questions are empty. Otherwise, it can state that more information is needed.'
    ),
});
export type AiAssistedServiceInquiryOutput = z.infer<
  typeof AiAssistedServiceInquiryOutputSchema
>;

export async function aiAssistedServiceInquiry(
  input: AiAssistedServiceInquiryInput
): Promise<AiAssistedServiceInquiryOutput> {
  return aiAssistedServiceInquiryFlow(input);
}

const inquiryPrompt = ai.definePrompt({
  name: 'aiAssistedServiceInquiryPrompt',
  input: { schema: AiAssistedServiceInquiryInputSchema },
  output: { schema: AiAssistedServiceInquiryOutputSchema },
  prompt: `You are an AI assistant for ICSA Ingeniería S.A. Your goal is to help potential clients generate a preliminary inquiry for our services.

Here are the services offered by ICSA Ingeniería S.A.:
${ICSA_SERVICES.map((s) => `- ${s}`).join('\n')}

Client's Project Description: """{{{projectDescription}}}"""

Based on the client's project description, perform the following steps:
1. Identify all relevant services from the list above that ICSA Ingeniería S.A. can provide.
2. Determine if there is sufficient information to create a comprehensive preliminary inquiry draft. If not, formulate 1-3 concise clarifying questions to gather necessary details.
3. If enough information is available (i.e., no clarifying questions are needed), generate a polite and professional preliminary inquiry draft for the client to send, including the suggested services.
4. If clarifying questions are needed, the preliminary inquiry draft should state that more information is required and prompt the client to answer the questions.

Provide your response in JSON format matching the following structure:
{
  "suggestedServices": string[],
  "clarifyingQuestions": string[],
  "preliminaryInquiryDraft": string
}
`,
});

const aiAssistedServiceInquiryFlow = ai.defineFlow(
  {
    name: 'aiAssistedServiceInquiryFlow',
    inputSchema: AiAssistedServiceInquiryInputSchema,
    outputSchema: AiAssistedServiceInquiryOutputSchema,
  },
  async (input) => {
    const { output } = await inquiryPrompt(input);
    return output!;
  }
);
