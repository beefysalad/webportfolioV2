export interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (section: string) => void;
}

export interface HeroProps {
  scrollToSection: (section: string) => void;
}
