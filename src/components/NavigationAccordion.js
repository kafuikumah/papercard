import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
  ChakraProvider,
} from "@chakra-ui/react";
import { Routes, Route, Link as RouteLink } from "react-router-dom";
import TechCareerRoadmap from "../pages/TechCareerRoadmap";
// import Home from "../pages/Home";

function NavigationAccordion() {
  return (
    <div>
      <ChakraProvider>
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
              <Link>
                <RouteLink to="/career-road-maps">
                  Become a Web Developer{" "}
                </RouteLink>
              </Link>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/career-road-maps" element={<TechCareerRoadmap />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default NavigationAccordion;
