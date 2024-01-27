// billing/index.js
import React from 'react';
import Grid from "@mui/material/Grid";
import BaseLayout from './components/BaseLayout';
import BillingInformation from './components/BillingInformation';
import PaymentMethod from './components/PaymentMethod';
import Invoices from './components/Invoices';
import ListeCategorieInformation from './components/BillingInformation/ListeCategorieInformation';


function Billing() {
  return (
    <BaseLayout stickyNavbar>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <BillingInformation />
        </Grid>
      </Grid>
    </BaseLayout>
  );
}

export default Billing;

// Utilisez une nouvelle instance de composant pour la route Categorie
export const CategorieComponent = () => (
  <BaseLayout stickyNavbar>
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <ListeCategorieInformation />
      </Grid>
    </Grid>
  </BaseLayout>
);
