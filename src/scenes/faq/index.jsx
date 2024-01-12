import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varient="h5">What is the purpose of this website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This website is a personal project to learn about React and Next.js.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Who developed this website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This website was developed by a passionate self-taught developer.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">What technologies were used in this website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This website was built using React, Next.js, and Material-UI.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Is the source code for this website available?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>The source code for this website is available on GitHub.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">How can I contribute to this project?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>You can contribute by submitting pull requests on GitHub.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">What was the biggest challenge in developing this website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>The biggest challenge was learning and implementing Next.js for server-side rendering.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">What are the future plans for this website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>The future plans include adding more features and improving the user interface.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
