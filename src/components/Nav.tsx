import React from "react";
import { Flex, Box, Container,IconButton,HamburgerIcon } from "@chakra-ui/react";
function Nav() {
  return (
    <Box>
       <>
      <IconButton
        pos="fixed"
        right={0}
        top={0}
        m={3}
        zIndex="10"
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        onClick={onOpen} // what's this?
      />
    </>
    </Box>
  );
}

export default Nav;
