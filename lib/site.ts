// Edite tudo aqui: dados da empresa, textos, serviços e imagens.
export const site = {
  name: "Nome da Empresa",
  city: "Sua Cidade",
  url: "https://seudominio.com.br",
  whatsapp: "5500000000000", // só números, com 55 + DDD
  instagram: "@suaempresa",
  address: "Rua Exemplo, 123 - Bairro",
  hours: "Seg a sex, 8h às 18h | Sáb, 8h às 13h",
  rating: "4,9",
  vehicles: "+300",
  message: "Olá! Encontrei vocês pelo site e gostaria de solicitar um orçamento.",
  // Coloque as fotos em /public e informe o caminho, ex.: "/hero.jpg". Vazio = fundo padrão.
  heroImage: "",
  before: "", // ex.: "/antes.jpg"
  after: "", // ex.: "/depois.jpg"
  gallery: ["", "", "", ""], // até 6 fotos, ex.: "/trabalho-1.jpg"
};

export const services = [
  { icon: "Droplets", name: "Lavagem Técnica", desc: "Limpeza detalhada da pintura, rodas e caixas de roda, sem riscos." },
  { icon: "Sparkles", name: "Higienização Interna", desc: "Bancos, carpetes e painel limpos e livres de odores." },
  { icon: "SprayCan", name: "Polimento Técnico", desc: "Remove riscos leves e devolve o brilho original da pintura." },
  { icon: "ShieldCheck", name: "Vitrificação", desc: "Proteção de longa duração contra sol, chuva e sujeira." },
  { icon: "Lightbulb", name: "Revitalização de Faróis", desc: "Faróis translúcidos de novo, com mais segurança à noite." },
  { icon: "Gem", name: "Detalhamento Completo", desc: "Cuidado total, por dentro e por fora, com acabamento de showroom." },
];

export const wa = (msg: string = site.message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
