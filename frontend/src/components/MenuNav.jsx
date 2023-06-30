import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import React from "react";

const MenuNav = () => {
  return (
    <Box bg="blue.100">
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export default MenuNav;
