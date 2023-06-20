import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
} from "@chakra-ui/react";

function NavigationAccordion() {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "black", color: "white" }}>
            <Box as="span" flex="1" textAlign="left">
              🛣 Tech Roadmap
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Link>Become a Web Developer</Link>
        </AccordionPanel>
        <AccordionPanel pb={4}>
          <Link>Become a Product Designer</Link>
        </AccordionPanel>
        <AccordionPanel pb={4}>
          <Link>Become a Datascience</Link>
        </AccordionPanel>
        <AccordionPanel pb={4}>
          <Link>Become a Product Manager</Link>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default NavigationAccordion;
