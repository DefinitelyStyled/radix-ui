import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import { st, classes } from './navigation-menu.st.css';

export const NavigationMenu: React.FC<RadixNavigationMenu.NavigationMenuProps> = (props) => (
    <RadixNavigationMenu.Root {...props} className={st(classes.root, props.className)} />
);

export const NavigationMenuSub: React.FC<RadixNavigationMenu.NavigationMenuSubProps> = (props) => (
    <RadixNavigationMenu.Sub {...props} className={st(classes.trigger, props.className)} />
);

export const NavigationMenuList: React.FC<RadixNavigationMenu.NavigationMenuListProps> = (
    props
) => <RadixNavigationMenu.List {...props} className={st(classes.list, props.className)} />;

export const NavigationMenuItem: React.FC<RadixNavigationMenu.NavigationMenuItemProps> = (
    props
) => <RadixNavigationMenu.Item {...props} className={st(classes.content, props.className)} />;

export const NavigationMenuTrigger: React.FC<RadixNavigationMenu.NavigationMenuTriggerProps> = (
    props
) => <RadixNavigationMenu.Trigger {...props} className={st(classes.trigger, props.className)} />;

export const NavigationMenuContent: React.FC<RadixNavigationMenu.NavigationMenuContentProps> = (
    props
) => <RadixNavigationMenu.Content {...props} className={st(classes.content, props.className)} />;

export const NavigationMenuLink: React.FC<RadixNavigationMenu.NavigationMenuLinkProps> = (
    props
) => <RadixNavigationMenu.Link {...props} className={st(classes.link, props.className)} />;

export const NavigationMenuIndicator: React.FC<RadixNavigationMenu.NavigationMenuIndicatorProps> = (
    props
) => (
    <RadixNavigationMenu.Indicator {...props} className={st(classes.indicator, props.className)} />
);

export const NavigationMenuViewport: React.FC<RadixNavigationMenu.NavigationMenuViewportProps> = (
    props
) => <RadixNavigationMenu.Viewport {...props} className={st(classes.viewport, props.className)} />;

/* 
  <NavigationMenu.Root>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger />
        <NavigationMenu.Content>
          <NavigationMenu.Link />
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Link />
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger />
        <NavigationMenu.Content>
          <NavigationMenu.Sub>
            <NavigationMenu.List />
            <NavigationMenu.Viewport />
          </NavigationMenu.Sub>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator />
    </NavigationMenu.List>

    <NavigationMenu.Viewport />
  </NavigationMenu.Root>
*/
