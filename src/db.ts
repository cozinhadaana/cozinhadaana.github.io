export interface iUser {
  avatar?: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  isLogged?: boolean;
}

export const Users: iUser[] = [
  {
    avatar: 'https://github.com/rickson-lima.png',
    name: 'Rickson Lima',
    cpf: '123.456.789-00',
    email: 'hello@world.com',
    password: '123',
  },
];

export interface iProducts {
  id: number;
  category: 'Tradicional' | 'Gourmet' | 'Sopas';
  urlImage: string;
  title: string;
  description: string;
  price: number;
  qt: number;
  active: boolean
}

export const Cart: iProducts[] = []

export const TradicionalsCollection: iProducts[] = [
  {
    id: 0,
    category: 'Tradicional',
    urlImage: new URL('./assets/iscadecarne.png', import.meta.url).href,
    title: 'Isca de carne',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 17.50,
    qt: 0, 
    active: true
  },
  {
    id: 1,
    category: 'Tradicional',
    urlImage: new URL('./assets/carnemoidav2.png', import.meta.url).href,
    title: 'Carne moída',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 20.5,
    qt: 0, 
    active: true
  },
  {
    id: 2,
    category: 'Tradicional',
    urlImage: new URL('./assets/assadodepanela.png', import.meta.url).href,
    title: 'Assado de panela',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 20,
    qt: 0, 
    active: true
  },
  {
    id: 3,
    category: 'Tradicional',
    urlImage: new URL('./assets/kaftaaomolhodetomate.png', import.meta.url).href,
    title: 'Káfta  ao molho de tomate',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 18,
    qt: 0, 
    active: true
  },
  {
    id: 4,
    category: 'Tradicional',
    urlImage: new URL('./assets/filedepirarucu.png', import.meta.url).href,
    title: 'Filé de pirarucu',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 20,
    qt: 0, 
    active: true
  },
  {
    id: 5,
    category: 'Tradicional',
    urlImage: new URL('./assets/filedearuana.png', import.meta.url).href,
    title: 'Filé de aruanã',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 6,
    category: 'Tradicional',
    urlImage: new URL('./assets/coxadefrango.png', import.meta.url).href,
    title: 'Coxa de frango assada',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 7,
    category: 'Tradicional',
    urlImage: new URL('./assets/frangogrelhado.png', import.meta.url).href,
    title: 'Peito de frango grelhado',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 8,
    category: 'Tradicional',
    urlImage: new URL('./assets/frangodesfiado.png', import.meta.url).href,
    title: 'Frango desfiado',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
];

export const GourmetsCollection: iProducts[] = [
  {
    id: 100,
    category: 'Gourmet',
    urlImage: new URL('./assets/filemignonaomolhomadeira.jpg', import.meta.url).href,
    title: 'Filé mignon ao molho madeira',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 101,
    category: 'Gourmet',
    urlImage: new URL('./assets/mignon_bacon_ervas.jpg', import.meta.url).href,
    title: 'Medalhão de filé com bacon',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 102,
    category: 'Gourmet',
    urlImage: new URL('./assets/bifearole.jpg', import.meta.url).href,
    title: 'Bife a rolê',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 103,
    category: 'Gourmet',
    urlImage: new URL('./assets/fileaparmegiana.jpg', import.meta.url).href,
    title: 'Frango à parmegiana',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 104,
    category: 'Gourmet',
    urlImage: new URL('./assets/saladadebacalhau.jpg', import.meta.url).href,
    title: 'Salada de bacalhau',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 105,
    category: 'Gourmet',
    urlImage: new URL('./assets/costelatambaquicomjambu.png', import.meta.url).href,
    title: 'Costela de tambaqui com jambu',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 106,
    category: 'Gourmet',
    urlImage: new URL('./assets/saladadefeijaocomcarneseca.jpg', import.meta.url).href,
    title: 'Salada de feijão com carne seca',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15,
    qt: 0, 
    active: true
  },
  {
    id: 107,
    category: 'Gourmet',
    urlImage: new URL('./assets/lasanhadeberinjela.png', import.meta.url).href,
    title: 'Lasanha de berinjela',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25.50,
    qt: 0, 
    active: true
  },
  {
    id: 108,
    category: 'Gourmet',
    urlImage: new URL('./assets/lasanhabolonhesa.jpg', import.meta.url).href,
    title: 'Lasanha a bolonhesa',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0, 
    active: true
  },
  {
    id: 109,
    category: 'Gourmet',
    urlImage: new URL('./assets/yakisoba.jpeg', import.meta.url).href,
    title: 'Yakisoba',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0, 
    active: true
  },
  {
    id: 110,
    category: 'Gourmet',
    urlImage: new URL('./assets/costelatambaquicomarrozdetacaca.png', import.meta.url).href,
    title: 'Costela de tambaqui com arroz de tacacá',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0, 
    active: true
  },
  {
    id: 111,
    category: 'Gourmet',
    urlImage: new URL('./assets/frangocomcremedecebola.png', import.meta.url).href,
    title: 'Filé de peito de frango com creme de cebola e laranja',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15,
    qt: 0, 
    active: true
  },
  {
    id: 112,
    category: 'Gourmet',
    urlImage: new URL('./assets/frangocommolhobarbecue.jpg', import.meta.url).href,
    title: 'Filé de peito de frango com bacon ao molho barbecue',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15,
    qt: 0, 
    active: true
  },
  
];

export const SopasCollection: iProducts[] = [
  {
    id: 200,
    category: 'Sopas',
    urlImage: new URL('./assets/sopav2.png', import.meta.url).href,
    title: 'Sopa de legumes',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10.70,
    qt: 0, 
    active: true
  },
  {
    id: 201,
    category: 'Sopas',
    urlImage: new URL('./assets/sopav2.png', import.meta.url).href,
    title: 'Sopa de abóbora',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 202,
    category: 'Sopas',
    urlImage: new URL('./assets/sopav2.png', import.meta.url).href,
    title: 'Sopa de lentilha',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 203,
    category: 'Sopas',
    urlImage: new URL('./assets/sopav2.png', import.meta.url).href,
    title: 'Sopa de feijão',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 204,
    category: 'Sopas',
    urlImage: new URL('./assets/sopav2.png', import.meta.url).href,
    title: 'Sopa de abóbora com camarão',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
];
