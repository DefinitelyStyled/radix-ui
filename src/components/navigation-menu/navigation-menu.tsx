import React from 'react';
import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import { st, classes } from './navigation-menu.st.css';

export const NavigationMenu: typeof RadixNavigationMenu.Root = React.forwardRef(function Navigation(
    props,
    forwardRef
) {
    return (
        <RadixNavigationMenu.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const NavigationMenuSub: typeof RadixNavigationMenu.NavigationMenuSub = React.forwardRef(
    function NavigationMenuSub(props, forwardRef) {
        return (
            <RadixNavigationMenu.NavigationMenuSub
                ref={forwardRef}
                {...props}
                className={st(classes.sub, props.className)}
            />
        );
    }
);

export const NavigationMenuList: typeof RadixNavigationMenu.NavigationMenuList = React.forwardRef(
    function NavigationMenuList(props, forwardRef) {
        return (
            <RadixNavigationMenu.NavigationMenuList
                ref={forwardRef}
                {...props}
                className={st(classes.list, props.className)}
            />
        );
    }
);

export const NavigationMenuItem: typeof RadixNavigationMenu.NavigationMenuItem = React.forwardRef(
    function NavigationMenuItem(props, forwardRef) {
        return (
            <RadixNavigationMenu.NavigationMenuItem
                ref={forwardRef}
                {...props}
                className={st(classes.item, props.className)}
            />
        );
    }
);

export const NavigationMenuTrigger: typeof RadixNavigationMenu.NavigationMenuTrigger =
    React.forwardRef(function NavigationMenuTrigger(props, forwardRef) {
        return (
            <RadixNavigationMenu.NavigationMenuTrigger
                ref={forwardRef}
                {...props}
                className={st(classes.trigger, props.className)}
            />
        );
    });

export const NavigationMenuContent: typeof RadixNavigationMenu.NavigationMenuContent =
    React.forwardRef(function NavigationMenuContent(props, forwardRef) {
        return (
            <RadixNavigationMenu.NavigationMenuContent
                ref={forwardRef}
                {...props}
                className={st(classes.content, props.className)}
            />
        );
    });

export const NavigationMenuLink: typeof RadixNavigationMenu.NavigationMenuLink = React.forwardRef(
    function NavigationMenuLink(props, forwardRef) {
        return (
            <RadixNavigationMenu.NavigationMenuLink
                ref={forwardRef}
                {...props}
                className={st(classes.link, props.className)}
            />
        );
    }
);

export const NavigationMenuIndicator: typeof RadixNavigationMenu.NavigationMenuIndicator =
    React.forwardRef(function NavigationMenuIndicator(props, forwardRef) {
        return (
            <RadixNavigationMenu.NavigationMenuIndicator
                ref={forwardRef}
                {...props}
                className={st(classes.indicator, props.className)}
            />
        );
    });

export const NavigationMenuViewport: typeof RadixNavigationMenu.NavigationMenuViewport =
    React.forwardRef(function NavigationMenuViewport(props, forwardRef) {
        return (
            <RadixNavigationMenu.NavigationMenuViewport
                ref={forwardRef}
                {...props}
                className={st(classes.viewport, props.className)}
            />
        );
    });

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
