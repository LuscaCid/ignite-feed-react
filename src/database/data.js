export const fakePosts = [
  {
    title: "Primeiro post da página",
    description: "Primeiro post da página feito pelo adm",
    userImgUrl: "https://github.com/acato21.png",
    username: "Igor Gabriel",
    publishedAt : new Date("2024-01-23 10:00:00"),
    role: "Frontend Developer",
    comments: [
      {
        content: "Conteúdo do comentário de Lucas",
        userCommentName: "Lucas Cid",
        likes : Math.round(Math.random()*3000),
        userCommentImgUrl: "https://github.com/luscacid.png"
      },
      {
        content: "Conteúdo do comentário de Anderson",
        userCommentName: "Anderson Lima",
        likes : Math.round(Math.random()*3000),
        userCommentImgUrl: "https://github.com/anderson.png"
      },
      {
        content: "Conteúdo do comentário de Pedro",
        userCommentName: "Pedro José",
        likes : Math.round(Math.random()*3000),
        userCommentImgUrl: "https://github.com/pedro.png"
      },
    ]
  },
  {
    title: "Segundo post da página",
    description: "Segundo post da página com mais informações",
    userImgUrl: "https://github.com/joao.png",
    username: "Outro Usuário",
    publishedAt : new Date("2024-01-20 20:00:00"),
    role: "Backend Developer",
    comments: [
      {
        content: "Conteúdo do comentário de Maria",
        userCommentName: "Maria Silva",
        likes : Math.round(Math.random()*3000),
        userCommentImgUrl: "https://github.com/maria.png"
      },
      {
        content: "Conteúdo do comentário de João",
        userCommentName: "João Oliveira",
        likes : Math.round(Math.random()*3000),
        userCommentImgUrl: "https://github.com/joao.png"
      },
    ]
  },
  {
    title: "Terceiro post da página",
    description: "Terceiro post da página com novas informações",
    userImgUrl: "https://github.com/pietro.png",
    username: "Mais um Usuário",
    publishedAt : new Date("2023-12-20 20:00:00"),
    role: "Full Stack Developer",
    comments: [
      {
        content: "Conteúdo do comentário de Ana",
        userCommentName: "Ana Santos",
        likes : Math.round(Math.random()*3000),
        userCommentImgUrl: "https://github.com/ana.png"
      },
      {
        content: "Conteúdo do comentário de José",
        userCommentName: "José Oliveira",
        likes : Math.round(Math.random()*3000),
        userCommentImgUrl: "https://github.com/jose.png"
      },
    ]
  },
  {
    title: "Quarto post da página",
    description: "Quarto post da página com diferentes detalhes",
    userImgUrl: "https://github.com/gustavo.png",
    username: "Usuário Final",
    role: "UX Designer",
    publishedAt : new Date("2024-01-23 13:00:00"),
    comments: [
      {
        content: "Conteúdo do comentário de Carolina",
        userCommentName: "Carolina Silva",
        likes : Math.round(Math.random()*3000),
        userCommentImgUrl: "https://github.com/carolina.png"
      },
      {
        content: "Conteúdo do comentário de Ricardo",
        userCommentName: "Ricardo Oliveira",
        likes : Math.round(Math.random()*3000),
        userCommentImgUrl: "https://github.com/ricardo.png"
      },
    ]
  },
  // Adicione mais objetos conforme necessário
];