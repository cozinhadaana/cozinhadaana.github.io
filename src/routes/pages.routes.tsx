import { ListItemsPage } from '../pages/Home'

const APP_ROUTES = [
  {
    id: 0,
    label: 'Tradicional',
    path: '/',
    component: <ListItemsPage category="tradicional" />,
  },
  {
    id: 1,
    label: 'Gourmet',
    path: 'gourmet',
    component: <ListItemsPage category="gourmet" />,
  },
  {
    id: 2,
    label: 'Sopas',
    path: 'sopas',
    component: <ListItemsPage category="sopas" />,
  },
];

export default APP_ROUTES