// Projects
const projects = [
  {
    id: '1',
    clientId: '1',
    name: 'eCommerce Website',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '2',
    clientId: '2',
    name: 'Dating App',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '3',
    clientId: '3',
    name: 'SEO Project',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '4',
    clientId: '4',
    name: 'Design Prototype',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'Done',
  },
  {
    id: '5',
    clientId: '5',
    name: 'Auction Website',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
];

// Clients
const clients = [
  {
    id: '1',
    name: 'Tony Stark',
    email: 'ironman@gmail.com',
    phone: '343-567-4333',
  },
  {
    id: '2',
    name: 'Natasha Romanova',
    email: 'blackwidow@gmail.com',
    phone: '223-567-3322',
  },
  {
    id: '3',
    name: 'Thor Odinson',
    email: 'thor@gmail.com',
    phone: '324-331-4333',
  },
  {
    id: '4',
    name: 'Steve Rogers',
    email: 'steve@gmail.com',
    phone: '344-562-6787',
  },
  {
    id: '5',
    name: 'Bruce Banner',
    email: 'bruce@gmail.com',
    phone: '321-468-8887',
  },
];

const products = [
  {
    id: '1',
    name: 'Sumsang S22',
    price: '$900',
  },
  {
    id: '2',
    name: 'twoplus 5t',
    price: '$400',
  },
  {
    id: '3',
    name: 'Apal 4 pro max',
    price: '$1100',
  },
  {
    id: '4',
    name: 'Me note 10i',
    price: '$150',
  },
  {
    id: '5',
    name: 'Lonova y700',
    price: '$300',
  },
  {
    id: '6',
    name: 'Suny mx30',
    price: '$750',
  },
  {
    id: '7',
    name: 'RealI naroz',
    price: '$200',
  },
  {
    id: '8',
    name: 'RealI 5',
    price: '$120',
  },
  {
    id: '9',
    name: 'Sumsang A22',
    price: '$120',
  },
  {
    id: '11',
    name: 'Apal 5 mini',
    price: '$520',
  },
  {
    id: '12',
    name: 'twoplus 3',
    price: '$380',
  },
  {
    id: '13',
    name: 'Me mix 5',
    price: '$120',
  },
  {
    id: '14',
    name: 'pexel 5a',
    price: '$320',
  },
  {
    id: '15',
    name: 'pexel 4 XL',
    price: '$120',
  },
];

const customers = [
  {
    id: '1',
    name: 'Tony Stark',
    email: 'ironman@gmail.com',
    phone: '343-567-4333',
    purchase: ['1', '2', '3', '9'],
  },
  {
    id: '2',
    name: 'Natasha Romanova',
    email: 'blackwidow@gmail.com',
    phone: '223-567-3322',
    purchase: ['13', '15', '9', '7', '8'],
  },
  {
    id: '3',
    name: 'Thor Odinson',
    email: 'thor@gmail.com',
    phone: '324-331-4333',
    purchase: ['1'],
  },
  {
    id: '4',
    name: 'Steve Rogers',
    email: 'steve@gmail.com',
    phone: '344-562-6787',
    purchase: ['9'],
  },
  {
    id: '5',
    name: 'Bruce Banner',
    email: 'bruce@gmail.com',
    phone: '321-468-8887',
    purchase: ['14'],
  },
];

module.exports = { customers, products, projects, clients };
