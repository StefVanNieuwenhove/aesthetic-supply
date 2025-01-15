import {
  AdminPanelSettings,
  FolderCopy,
  Home,
  Inventory,
  QuestionAnswer,
  Receipt,
  ShoppingCart,
  SwapVert,
} from '@mui/icons-material';
import { Link } from './types';

export const Links: Link[] = [
  {
    href: '/getting-started',
    title: 'Getting started',
    icon: <QuestionAnswer />,
  },
  {
    href: '/',
    title: 'Dashboard',
    icon: <Home />,
  },
  {
    href: '/orders',
    title: 'Orders',
    icon: <ShoppingCart />,
  },
  {
    href: '/stock',
    title: 'Stock',
    icon: <Inventory />,
  },
  {
    href: '/input-output',
    title: 'Input/output',
    icon: <SwapVert />,
  },
  {
    href: '/stocktakes',
    title: 'Stocktakes',
    icon: <Home />,
  },
  {
    href: '/facturen',
    title: 'Facturen',
    icon: <Receipt />,
  },
  {
    href: '/inzichten',
    title: 'Inzichten',
    icon: <Home />,
  },
  {
    href: '/documenten',
    title: 'Documenten',
    icon: <FolderCopy />,
  },
  {
    href: '/beheer',
    title: 'Beheer',
    icon: <AdminPanelSettings />,
    children: [
      {
        href: '/beheer/producten',
        title: 'Producten',
      },
    ],
  },
];
