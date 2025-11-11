import './App.css';
import { Box, Button } from '@mui/material';
import TexterField from './components/TexterField';
import SelectField from './components/SelectField';
import NumericField from './components/NumericField';
import CheckField from './components/CheckField';
import { countries } from "./data/data";
import { peoples } from './data/data';
import { checkboxes } from './data/data';
import { useForm, FormProvider } from 'react-hook-form';

export default function App() {

  const methods = useForm({

    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      teamSize: '',
      location: '',
      message: '',
      products: {

        UntitledMail: false,
        UntitledCalendar: false,
        UntitledDrive: false,
        UntitledVPN: false,
        UntitledWorkSpace: false,
        Other: false,
      },


    }
  });
  const onSubmit = (data) => {
    const selectedProducts = checkboxes
      .filter((_, index) => data.products[index])
      .map(item => item.label);
    console.log("Form data:", data);
  }


  return (

    <FormProvider {...methods}>
      <Box justifySelf={'center'}>
        <form onSubmit={methods.handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px', margin: '50px auto' }}>
          <h2>Contact our sales team</h2>
          <Box display={'flex'} gap={2}>
            <TexterField height={45} name="firstName" label="First Name*" placeholder="First Name" />
            <TexterField height={45} name="lastName" label="Last Name*" placeholder="Last Name" />
          </Box>
          <TexterField name="email" height={45} fullwidth={true} label="Email*" placeholder="you@company.com" />
          <NumericField name="phoneNumber" label="Phone Number" />
          <SelectField name="teamSize" label="Team size" menuitems={peoples} />
          <SelectField name="location" label="Location" menuitems={countries} />
          <TexterField name="message" multiline={true} height={100} fullwidth={true} label="Message*" placeholder="Leave us a message" />
          <CheckField name="products" checkboxes={checkboxes} />
          <Button type='submit' variant="contained" sx={{ height: 40, borderRadius: '30px', fontWeight: "bold", fontSize: 13, background: '#9D00FF' }}>Send Message</Button>
        </form>

      </Box>
    </FormProvider>
  )
}