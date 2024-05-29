import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  // Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiBookmark,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiBook,
  FiList,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
// @ts-ignore
import logo from "../../assets/uniport logo.png";
import { useAuth } from "../../contexts/AuthContext";

interface LinkItemProps {
  name: string;
  icon: IconType;
  to: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, to: "/books" },
  { name: "Add a Book", icon: FiBook, to: "books/add-book" },
  { name: "Borrow Book", icon: FiBookmark, to: "books/borrow-book" },
  { name: "Borrowers List", icon: FiList, to: "books/book-borrowers" },
  { name: "Settings", icon: FiSettings, to: "books/settings" },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* enter your contents here */}
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image boxSize="40px" objectFit="cover" src={logo} alt="logo" />
        <CloseButton
          color={"black"}
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem to={link.to} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  to: string;
}
const NavItem = ({ icon, children, to, ...rest }: NavItemProps) => {
  return (
    <Link
      to={to}
      style={{ textDecoration: "none" }}
      // _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blue.600",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { logout, user } = useAuth();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image
        display={{ base: "flex", md: "none" }}
        boxSize="40px"
        objectFit="cover"
        src={logo}
        alt="logo"
      />

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "data:image/jpeg;base64,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"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm" color="blue.900">
                    {user ? user.username : "Guest"}
                  </Text>
                  <Text fontSize="xs" color="blue.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuDivider />
              <MenuItem onClick={logout}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
