import {
  AdminPanelSettings,
  Dashboard,
  DomainDisabled,
  FolderCopy,
  Input,
  Inventory,
  ManageSearch,
  Output,
  QueryStats,
  QuestionAnswer,
  ShoppingCart,
} from '@mui/icons-material';
import { Link } from './types';

export const Links: Link[] = [
  {
    href: '/',
    title: 'Dashboard',
    icon: <Dashboard />,
  },
  {
    href: '/orders',
    title: 'Bestellingen',
    icon: <ShoppingCart />,
  },
  {
    href: '/stock',
    title: 'Voorraad',
    icon: <Inventory />,
  },
  {
    href: '/input',
    title: 'Input',
    icon: <Input />,
  },
  {
    href: '/output',
    title: 'Output',
    icon: <Output />,
  },
  {
    href: '/Location-swap',
    title: 'Locatietransfers',
    icon: <DomainDisabled />,
  },
  {
    href: '/stocktakes',
    title: 'Stocktakes',
    icon: <Inventory />,
  },
  {
    href: '/facturen',
    title: 'Facturen',
    icon: <FolderCopy />,
  },
  {
    href: '/data',
    title: 'Data',
    icon: <QueryStats />,
  },
  {
    href: '/logs',
    title: 'Activitietenlogboek',
    icon: <ManageSearch />,
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
  {
    href: '/getting-started',
    title: 'Getting started',
    icon: <QuestionAnswer />,
  },
];

export const BackOfficeLinks: Link[] = [
  {
    href: '/',
    title: 'Dashboard',
  },
  {
    href: '/orders',
    title: 'Bestellingen',
  },
  {
    href: '/stock',
    title: 'Voorraad',
  },
  {
    href: '/input',
    title: 'Bedrijven',
  },
];
