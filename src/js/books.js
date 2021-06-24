const categories = [
  'Les très beaux livres',
  'Les livres originaux',
  'Les indispensables',
  'Jeunesse',
  'Bandes dessinées',
  'Geek pop',
  'Littérature',
  'Science histoire',
  'Économie / Droit',
  'Sciences',
  'Loisirs / Vie pratique',
];

const books = [
  {
    title: 'Héros : 40 personnages de roman - Patricia Arrou-Vignod',
    description: 'Les portraits de quarante héros et héroïnes de la littérature mondiale, de Gilgamesh à Harry Potter en passant par Hercule, Don Quichotte, D\'Artagnan, Jane Eyre, Alice...',
    price: '12,50 €',
    image_url: 'https://mollatcommon.blob.core.windows.net/notices56/2479015_medium.jpg',
    link: 'https://www.mollat.com/livres/2479015/patricia-arrou-vignod-heros-40-personnages-de-roman',
  },
  {
    title: 'L\'appel du large - Cathy Ytak',
    description: 'Un album abordant les relations des humains avec la nature, l\'exil, la solidarité ainsi que la protection de la faune et de la flore.',
    price: '17,50 €',
    image_url: 'https://mollatcommon.blob.core.windows.net/notices55/2431798_medium.jpg',
    link: 'https://www.mollat.com/livres/2431798/cathy-ytak-l-appel-du-large',
  },
  {
    title: 'Gaspard dans la nuit - Seng Soun Ratanavanh',
    description: 'Le voyage nocturne de Gaspard et d\'une petite souris dans toutes les pièces de la maison où ils font d\'étranges rencontres. Un album sur les peurs enfantines et l\'amitié...',
    price: '13,90 €',
    image_url: 'https://mollatcommon.blob.core.windows.net/notices56/2458781_medium.jpg',
    link: 'https://www.mollat.com/livres/2458781/seng-soun-ratanavanh-gaspard-dans-la-nuit',
  },
];

function setupBooks() {
  return {
    books,
    categories,
  };
}

export { setupBooks };
