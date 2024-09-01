
// books.js

const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedDate: "1960-07-11",
      pages: 281,
      coverImage: "https://th.bing.com/th/id/OIP.jvYLjJvwkKBnI2svjjyKigHaLI?w=202&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A novel about the serious issues of race, class, gender, and justice in the American South.",
      categories: ["Fiction", "Classic", "Historical"]
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publishedDate: "1949-06-08",
      pages: 328,
      coverImage: "https://th.bing.com/th/id/OIP.bcQtcf_xrZuJkIF8nHpaywHaLb?w=201&h=310&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
      categories: ["Science Fiction", "Dystopian", "Political"]
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedDate: "1925-04-10",
      pages: 180,
      coverImage: "https://th.bing.com/th/id/OIP.aJE9Wj2KjPNANln6CB3YawHaK-?w=202&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A story about the Jazz Age and the American dream set in the 1920s.",
      categories: ["Fiction", "Classic", "Romance"]
    },
    {
      id: 4,
      title: "Moby Dick",
      author: "Herman Melville",
      publishedDate: "1851-10-18",
      pages: 635,
      coverImage: "https://th.bing.com/th/id/OIP.JAsvBFB3f70MYCCG2hzAKgHaLS?w=202&h=308&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "An epic tale of a man's obsession with hunting a giant whale.",
      categories: ["Fiction", "Classic", "Adventure"]
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedDate: "1813-01-28",
      pages: 279,
      coverImage: "https://th.bing.com/th/id/OIP.0M-waiYskseNSQXn-CDbZAAAAA?w=134&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A romantic novel that also critiques the social structure of its time.",
      categories: ["Fiction", "Classic", "Romance"]
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishedDate: "1951-07-16",
      pages: 214,
      coverImage: "https://th.bing.com/th/id/OIP.PQKfkZFKgDWeNleDPTi9dwHaK4?w=202&h=297&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A novel about teenage angst and alienation.",
      categories: ["Fiction", "Classic", "Young Adult"]
    },
    {
      id: 7,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publishedDate: "1937-09-21",
      pages: 310,
      coverImage: "https://th.bing.com/th/id/OIP._AWQua901tukexSsdbr6IgHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A fantasy novel that serves as a prelude to the Lord of the Rings trilogy.",
      categories: ["Fantasy", "Adventure", "Classic"]
    },
    {
      id: 8,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      publishedDate: "1997-06-26",
      pages: 309,
      coverImage: "https://th.bing.com/th/id/OIP.BASGalt69QU62jV8bEd3MgHaIh?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "The first book in the Harry Potter series about a young wizard's journey.",
      categories: ["Fantasy", "Young Adult", "Adventure"]
    },
    {
      id: 9,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      publishedDate: "2003-03-18",
      pages: 689,
      coverImage: "https://th.bing.com/th/id/OIP.AOvLP6KR-TgSmx0QKPgPdgHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A mystery thriller involving a secret society and religious symbolism.",
      categories: ["Thriller", "Mystery", "Historical"]
    },
    {
      id: 10,
      title: "The Alchemist",
      author: "Paulo Coelho",
      publishedDate: "1988-04-01",
      pages: 208,
      coverImage: "https://th.bing.com/th/id/OIP.hskWPmZrs955-YU_X3izoAHaLc?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A philosophical novel about a shepherd’s journey to find his personal legend.",
      categories: ["Fiction", "Philosophy", "Adventure"]
    },
    {
      id: 11,
      title: "Brave New World",
      author: "Aldous Huxley",
      publishedDate: "1932-08-31",
      pages: 311,
      coverImage: "https://th.bing.com/th/id/OIP.J3Bds2yvtaEZ5Lgzv6AsywHaLb?w=201&h=310&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A dystopian novel about a technologically advanced society.",
      categories: ["Science Fiction", "Dystopian", "Classic"]
    },
    {
      id: 12,
      title: "Gone Girl",
      author: "Gillian Flynn",
      publishedDate: "2012-06-05",
      pages: 432,
      coverImage: "https://th.bing.com/th/id/OIP.9FbgCdOBeFy62R5JQcwDogHaK2?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A thriller about a woman's mysterious disappearance and the media frenzy that follows.",
      categories: ["Thriller", "Mystery", "Psychological"]
    },
    {
      id: 13,
      title: "The Road",
      author: "Cormac McCarthy",
      publishedDate: "2006-09-26",
      pages: 287,
      coverImage: "https://th.bing.com/th/id/OIP.RnrpJ9TUYGFo3OLm6PZcPwHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A post-apocalyptic novel about a father and son’s journey across a desolate landscape.",
      categories: ["Fiction", "Dystopian", "Adventure"]
    },
    {
      id: 14,
      title: "Little Women",
      author: "Louisa May Alcott",
      publishedDate: "1868-09-30",
      pages: 449,
      coverImage: "https://th.bing.com/th/id/OIP.LL8Fzr34CsXX1LhxbmevKwHaLH?w=116&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A novel following the lives of the four March sisters during the American Civil War.",
      categories: ["Fiction", "Classic", "Historical"]
    },
    {
      id: 15,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      publishedDate: "2008-09-14",
      pages: 374,
      coverImage: "https://th.bing.com/th/id/OIP.lPZ5FeIYV2EEZh6wdhgmPAHaLH?w=116&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A dystopian novel about a televised death match in a future society.",
      categories: ["Science Fiction", "Dystopian", "Young Adult"]
    }
  ];
  
  export default books;
  
