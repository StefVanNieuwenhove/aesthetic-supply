import { Breadcrumbs, Link } from '@mui/material';

const BreadCrumbs = () => {
  return (
    <>
      <Breadcrumbs aria-label='breadcrumb' sx={{ color: 'white' }}>
        <Link underline='hover' color='inherit'>
          Dashboard
        </Link>
        <Link underline='hover' color='inherit'>
          Products
        </Link>
      </Breadcrumbs>
    </>
  );
};

export default BreadCrumbs;
