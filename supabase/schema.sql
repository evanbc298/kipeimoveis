-- Schema Kipe Imóveis — baseado em dados/referencias/guia-imobiliaria-automatizada-bc.md
-- Rodar uma vez no SQL Editor do Supabase (Database > SQL Editor > New query > colar > Run)

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Corretores (referenciada pelo guia original mas nunca definida — completando aqui)
CREATE TABLE corretores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  telefone VARCHAR(20),
  creci VARCHAR(20),
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Proprietários (Captação)
CREATE TABLE proprietarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  telefone VARCHAR(20) NOT NULL,
  cpf_cnpj VARCHAR(20),
  endereco TEXT,
  documento_contrato_url TEXT,
  comissao_percentual DECIMAL(5,2) DEFAULT 5.0,
  status VARCHAR(20) DEFAULT 'ativo',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Imóveis
CREATE TABLE imoveis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo VARCHAR(20) UNIQUE NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  tipo VARCHAR(50) NOT NULL, -- apartamento, casa, cobertura, terreno
  operacao VARCHAR(20) NOT NULL, -- venda, aluguel, temporada
  endereco TEXT NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  cidade VARCHAR(100) DEFAULT 'Balneário Camboriú',
  estado VARCHAR(2) DEFAULT 'SC',
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  preco DECIMAL(15,2) NOT NULL,
  preco_condominio DECIMAL(15,2),
  iptu DECIMAL(15,2),
  area_total INTEGER,
  area_util INTEGER,
  dormitorios INTEGER,
  suites INTEGER,
  banheiros INTEGER,
  vagas INTEGER,
  descricao TEXT,
  caracteristicas JSONB, -- ["piscina", "academia", "frente-mar"]
  fotos JSONB, -- [{url, ordem, alt}]
  tour_virtual_url TEXT,
  video_url TEXT,
  status VARCHAR(20) DEFAULT 'ativo', -- ativo, reservado, vendido, inativo
  proprietario_id UUID REFERENCES proprietarios(id),
  exclusividade BOOLEAN DEFAULT false,
  destaque BOOLEAN DEFAULT false,
  score_avm INTEGER,
  preco_sugerido_avm DECIMAL(15,2),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Leads
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255),
  email VARCHAR(255),
  telefone VARCHAR(20) NOT NULL,
  whatsapp_id VARCHAR(50),
  perfil VARCHAR(50), -- investidor, morador, segunda_residencia
  renda_familiar DECIMAL(15,2),
  entrada_disponivel DECIMAL(15,2),
  prazo VARCHAR(50), -- imediato, 3_meses, 6_meses, 1_ano
  bairros_interesse JSONB,
  tipo_interesse JSONB,
  faixa_preco_min DECIMAL(15,2),
  faixa_preco_max DECIMAL(15,2),
  score INTEGER DEFAULT 0,
  status VARCHAR(50) DEFAULT 'novo', -- novo, qualificando, visita_agendada, proposta, fechado, perdido
  fonte VARCHAR(50), -- site, whatsapp, instagram, google_ads, indicacao
  corretor_id UUID REFERENCES corretores(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Conversas (WhatsApp)
CREATE TABLE conversas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  whatsapp_id VARCHAR(50) NOT NULL,
  mensagem TEXT NOT NULL,
  tipo VARCHAR(20) NOT NULL, -- entrada, saida
  agente VARCHAR(50), -- qualificador, buscador, agendador, humano
  intencao VARCHAR(50), -- saudacao, qualificacao, busca, agendamento, negociacao
  score_antes INTEGER,
  score_depois INTEGER,
  handoff BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Agendamentos
CREATE TABLE agendamentos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  imovel_id UUID REFERENCES imoveis(id),
  corretor_id UUID REFERENCES corretores(id),
  data DATE NOT NULL,
  hora TIME NOT NULL,
  status VARCHAR(20) DEFAULT 'agendado', -- agendado, confirmado, realizado, cancelado, remarcado
  google_event_id VARCHAR(255),
  feedback TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Posts do Blog (Autoblog)
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  conteudo TEXT NOT NULL,
  resumo TEXT,
  imagem_capa TEXT,
  categoria VARCHAR(100),
  tags JSONB,
  palavras_chave JSONB,
  autor VARCHAR(100) DEFAULT 'Equipe Kipe Imóveis',
  gerado_por_ia BOOLEAN DEFAULT true,
  publicado BOOLEAN DEFAULT false,
  data_publicacao TIMESTAMP,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Emails Enviados
CREATE TABLE emails_enviados (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  tipo VARCHAR(50) NOT NULL, -- boas_vindas, nurture, visita, proposta
  assunto VARCHAR(255),
  aberto BOOLEAN DEFAULT false,
  clicado BOOLEAN DEFAULT false,
  data_envio TIMESTAMP DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_imoveis_bairro ON imoveis(bairro);
CREATE INDEX idx_imoveis_status ON imoveis(status);
CREATE INDEX idx_imoveis_preco ON imoveis(preco);
CREATE INDEX idx_leads_score ON leads(score DESC);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_conversas_lead ON conversas(lead_id);
CREATE INDEX idx_conversas_whatsapp ON conversas(whatsapp_id);

-- Row Level Security: bloqueia acesso via chave publishable (client-side).
-- Só a secret key (server-side, nossos scripts/API routes) acessa essas tabelas.
ALTER TABLE corretores ENABLE ROW LEVEL SECURITY;
ALTER TABLE proprietarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE imoveis ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversas ENABLE ROW LEVEL SECURITY;
ALTER TABLE agendamentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE emails_enviados ENABLE ROW LEVEL SECURITY;
