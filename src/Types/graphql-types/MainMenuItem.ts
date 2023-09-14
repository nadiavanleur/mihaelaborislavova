type MainMenuItem = {
  title: string;
  icon?: string;
  iconOnly?: boolean;
  url?: string;
  download: {
    url?: string;
  };
  useUrl?: boolean;
}

export default MainMenuItem;