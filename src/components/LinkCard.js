import { Card, Image, Heading, Stack, CardBody, Link } from "@chakra-ui/react";

function LinkCard() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      height={32}
    >
      <Image
        objectFit="cover"
        boxSize="80px"
        maxW={{ base: "100%", h: "200px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="LinkedIn Logo"
      />

      <Stack>
        <CardBody>
          <Heading size="md">LinkedIn - Connect Professionally</Heading>
          <Link href="https://inkedin.com" isExternal>
            linkedin.com
          </Link>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default LinkCard;
