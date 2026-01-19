/**
 * Navigation Helper - Centralized navigation logic for Figma-exported components
 * Handles click event interception and routing based on element attributes and text content
 */

export interface NavigationConfig {
  [key: string]: {
    path: string;
    patterns: string[];
    selectors?: string[];
  };
}

export const navigationRoutes: NavigationConfig = {
  home: {
    path: '/',
    patterns: ['Home', 'home'],
    selectors: [
      '[data-name="Navbar / 2 /"] [data-name="Content"]',
      '[data-name="Footer / 10 /"] [data-name="Content"]',
      '[data-name="Group"]'
    ]
  },
  about: {
    path: '/about',
    patterns: ['About', 'about', 'About us', 'About Us'],
    selectors: ['[data-name="Link"]', '[data-name="Button"]']
  },
  growthLog: {
    path: '/growth-log',
    patterns: ['Growth Log', 'Growth log', 'growth log'],
    selectors: ['[data-name="Link"]', '[data-name="Button"]']
  },
  contact: {
    path: '/contact',
    patterns: ['Contact', 'contact', 'Contact us', 'Contact Us'],
    selectors: ['[data-name="Link"]', '[data-name="Button"]']
  },
  careers: {
    path: '/careers',
    patterns: ['Careers', 'Career', 'careers', 'career'],
    selectors: ['[data-name="Link"]', '[data-name="Button"]']
  },
  designLabs: {
    path: '/design-labs',
    patterns: ['Design Labs', 'Design labs', 'design labs'],
    selectors: ['[data-name="Link"]', '[data-name="Card"]', '[data-name="Button"]']
  },
  mediaLabs: {
    path: '/media-labs',
    patterns: ['Media Labs', 'Media labs', 'media labs'],
    selectors: ['[data-name="Link"]', '[data-name="Card"]', '[data-name="Button"]']
  },
  ourLabs: {
    path: '/our-labs',
    patterns: ['Our Labs', 'Our labs', 'our labs', 'Labs', 'labs'],
    selectors: ['[data-name="Link"]', '[data-name="Card"]', '[data-name="Button"]']
  }
};

/**
 * Checks if an element or its ancestors match navigation patterns
 */
export function matchesNavigationPattern(
  element: HTMLElement,
  patterns: string[],
  selectors?: string[]
): boolean {
  // Check direct text content
  const textContent = element.textContent?.trim() || '';
  
  for (const pattern of patterns) {
    // Exact match with the pattern
    if (textContent === pattern) {
      return true;
    }
    
    // Check if text includes the pattern (for compound text)
    if (textContent.includes(pattern)) {
      // Additional validation: ensure it's not a partial match of a longer word
      const regex = new RegExp(`\\b${pattern}\\b`, 'i');
      if (regex.test(textContent)) {
        return true;
      }
    }
  }
  
  // Check parent selectors
  if (selectors) {
    for (const selector of selectors) {
      const parent = element.closest(selector);
      if (parent) {
        const parentText = parent.textContent?.trim() || '';
        for (const pattern of patterns) {
          if (parentText === pattern || parentText.includes(pattern)) {
            return true;
          }
        }
      }
    }
  }
  
  return false;
}

/**
 * Checks if click is on logo (for home navigation)
 */
export function isLogoClick(element: HTMLElement): boolean {
  // Check if element is or is within the logo structure
  const logoParent = element.closest('[data-name="Content"]');
  const hasGroupChild = logoParent?.querySelector('[data-name="Group"]');
  const isDirectGroup = element.closest('[data-name="Group"]');
  
  if (logoParent && hasGroupChild || isDirectGroup) {
    // Ensure it's in navbar or footer
    const isInNavbar = element.closest('[data-name="Navbar / 2 /"]');
    const isInFooter = element.closest('[data-name="Footer / 10 /"]');
    
    return !!(isInNavbar || isInFooter);
  }
  
  return false;
}

/**
 * Main navigation handler
 * Returns the path to navigate to, or null if no navigation should occur
 */
export function getNavigationPath(element: HTMLElement, currentPath: string): string | null {
  // Check for logo click first (highest priority)
  if (isLogoClick(element)) {
    return currentPath === '/' ? null : '/'; // Don't navigate if already on home
  }
  
  // Check each navigation route
  for (const [key, config] of Object.entries(navigationRoutes)) {
    if (matchesNavigationPattern(element, config.patterns, config.selectors)) {
      // Don't navigate if already on the target page
      return currentPath === config.path ? null : config.path;
    }
  }
  
  return null;
}

/**
 * Creates a navigation click handler for use in useEffect
 */
export function createNavigationHandler(
  navigate: (path: string) => void,
  currentPath: string
): (e: MouseEvent) => void {
  return (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Skip if clicking on form inputs or interactive elements
    if (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.tagName === 'SELECT' ||
      target.closest('input, textarea, select')
    ) {
      return;
    }
    
    const path = getNavigationPath(target, currentPath);
    
    if (path) {
      e.preventDefault();
      e.stopPropagation();
      
      // Prevent text selection on navigation clicks
      if (window.getSelection) {
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
        }
      }
      
      // Scroll to top when navigating
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      navigate(path);
    }
  };
}
