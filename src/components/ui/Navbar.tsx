"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Link,
  DropdownSection,
  User,
  Badge,
  Tooltip,
} from "@nextui-org/react";
import React from "react";
import {
  LogIn,
  UserRound,
  ChartLine,
  CircleHelp,
  LogOut,
  BellIcon,
  MessageCircleIcon,
} from "lucide-react";

export default function UiNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAuth, setAuth] = React.useState(false);

  const menuItems = ["Profile", "Dashboard", "Activity", "Analytics"];

  return (
    <Navbar
      shouldHideOnScroll
      isBlurred={false}
      isBordered
      maxWidth="xl"
      className="my-2"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <Link color="foreground" href="/" className="flex gap-2 items-center">
            <p className="font-bold text-2xl text-inherit">Creatify</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            color="foreground"
            className="flex gap-2 items-center cursor-pointer"
          >
            <p className="font-bold text-2xl text-inherit">Creatify</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" className="font-semibold" href="#">
            лента
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        {isAuth ? (
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="signup"
              variant="solid"
              size="md"
              className="font-semibold"
              startContent={<LogIn size={20} />}
            >
              Войти
            </Button>
          </NavbarItem>
        ) : (
          <div className="flex gap-6 items-center">
            <div className="gap-2 sm:flex hidden">
              <Badge color="primary" content="3">
                <Tooltip content="Сообщения" placement="bottom">
                  <Button isIconOnly variant="flat">
                    <MessageCircleIcon size={20}/>
                  </Button>
                </Tooltip>
              </Badge>
              <Badge color="primary" content="5">
                <Tooltip content="Уведомления" placement="bottom">
                  <Button isIconOnly variant="flat">
                    <BellIcon size={20}/>
                  </Button>
                </Tooltip>
              </Badge>
            </div>
            <Dropdown placement="bottom-end" backdrop="blur">
              <DropdownTrigger>
                <User
                  className="font-semibold cursor-pointer"
                  name="Viktor"
                  description={
                    <Link href="#" size="sm" className="text-[12px]">
                      @1rowvy
                    </Link>
                  }
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownSection showDivider>
                  <DropdownItem
                    key="profile"
                    startContent={<UserRound size={20} />}
                  >
                    <p className="font-semibold">Профиль</p>
                  </DropdownItem>
                  <DropdownItem
                    key="dashboard"
                    startContent={<ChartLine size={20} />}
                  >
                    <p className="font-semibold">Панель управления</p>
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection showDivider>
                  <DropdownItem
                    key="help"
                    startContent={<CircleHelp size={20} />}
                  >
                    <p className="font-semibold">Помощь</p>
                  </DropdownItem>
                </DropdownSection>
                <DropdownItem
                  key="logout"
                  className="text-danger"
                  color="danger"
                  startContent={<LogOut size={20} />}
                >
                  <p className="font-semibold">Выйти</p>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
