# SabeTudo - Portal de Notícias 📰

Projeto desenvolvido para a disciplina de Desenvolvimento Web 2, consistindo na criação de um portal de notícias/blog responsivo e dinâmico, utilizando a tela-modelo "Latência" como inspiração. 

O projeto foi construído utilizando apenas **HTML5 semântico**, **CSS3 (Flexbox e Grid)** e **JavaScript Vanilla**, sem o uso de bibliotecas externas.

## 🎨 Design e Interface

A interface foi projetada com foco em legibilidade e usabilidade, aplicando um sistema de design consistente.

### Tipografia
Foram utilizadas duas famílias tipográficas importadas do Google Fonts:
- **Newsreader (Serifada):** Utilizada no logotipo e nos títulos das matérias, transmitindo o tom editorial clássico de um jornal.
- **Inter (Sem serifa):** Utilizada na navegação, corpo do texto, metadados e botões, priorizando a legibilidade nas telas.

### Paleta de Cores
As cores foram aplicadas através de variáveis CSS, permitindo a fácil manutenção e a implementação do Modo Escuro.

**Cores Base:**
- Fundo (`--paper`): `#FFFFFF`
- Texto Principal (`--ink`): `#15171C`
- Texto Secundário (`--slate`): `#5A6472`
- Superfícies/Busca (`--mist`): `#EEF0F3`
- Linhas/Bordas (`--line`): `#E2E5EA`
- Destaque/Ao Vivo (`--signal`): `#E5372A`

**Cores de Apoio (Editorias):**
- Tecnologia: `#2F6BEB`
- Negócios: `#C07A12`
- Ciência: `#0F8C7E`
- Cultura: `#B8348F`
- Opinião: `#5A6472`

### Imagens e Ícones
- **Imagens:** As fotos utilizadas nos cards de notícias foram retiradas de bancos de imagens gratuitos de uso livre (Unsplash / Pexels).
- **Ícones:** Foi utilizada a biblioteca Font Awesome para a renderização dos ícones de interface (busca, tema, botão de fechar, etc.).

## ⚙️ Funcionalidades e Interatividade (JavaScript)

O site possui manipulação direta do DOM atendendo aos seguintes requisitos:
- **Relógio ao vivo:** Data e hora no cabeçalho atualizadas a cada segundo.
- **Tema Claro/Escuro:** Botão que alterna as cores do site lendo a preferência inicial do sistema operacional.
- **Filtro por Editoria e Busca:** Renderização dinâmica dos cards através de um array de objetos, com filtros por categoria e barra de pesquisa em tempo real.
- **Carregar Mais:** Paginação simples que revela novas notícias sob demanda.
- **Validação de Formulário:** Validação da newsletter utilizando Expressões Regulares (Regex).
- **Menu Off-Canvas:** Menu lateral responsivo com travamento de rolagem do fundo (overlay).
