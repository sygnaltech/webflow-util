
/**
 * SA5 COMPONENTS
 * Specialized utility classes for cupporting standard components with embedded code.
 * https://codepen.io/memetican/pen/WbQQmed/2554b21e7011f4861bc7d8dcc8d9f6ff
 * 
 */


export class CoreComponent {
    root: Element;
  
  constructor(scriptElement: HTMLScriptElement) {
    this.root = scriptElement.parentElement!.parentElement!;
  }

  init() {
    this.applyDynamicAttrs();
//    this.cleanupDirectives(); 
  }

private applyDynamicAttrs(): void {
  const allElements = this.root.querySelectorAll('*');

  for (const el of [this.root, ...allElements]) {
    for (const attr of Array.from(el.attributes)) {
      const name = attr.name;
      const val = attr.value;

      // Boolean attribute logic: x:*:bool-truthy
      if (name.startsWith('x:') && name.endsWith(':bool-truthy')) {
        const actualAttr = name.slice(2, -12);
        if (this.isTruthy(val)) {
          el.setAttribute(actualAttr, '');
        } else {
          el.removeAttribute(actualAttr);
        }
      }

      // "from" attribute logic: x:*:from
      if (name.startsWith('x:') && name.endsWith(':from')) {
        const targetAttr = name.slice(2, -5); // removes 'x:' and ':from'

        const match = val.match(/^([+-])\[(.+)\]$/);
        if (!match) continue;

        const direction = match[1]; // '+' or '-'
        const sourceAttr = match[2];

        let sibling: Element | null = null;
        if (direction === '+') sibling = el.nextElementSibling;
        if (direction === '-') sibling = el.previousElementSibling;
        if (!sibling) continue;

        const sourceValue = sibling.getAttribute(sourceAttr);
        if (sourceValue !== null) {
          el.setAttribute(targetAttr, sourceValue);
        } else {
          el.removeAttribute(targetAttr);
        }
        
      }
    }
  }
}

private cleanupDirectives(): void {
  const allElements = this.root.querySelectorAll('*');

  for (const el of [this.root, ...allElements]) {
    // Remove elements with cc-remove
    if (el.hasAttribute('cc-remove')) {
      el.remove();
      continue; // skip further processing
    }

    // Unwrap elements with cc-unwrap
    if (el.hasAttribute('cc-unwrap')) {
      const parent = el.parentElement;
      if (!parent) continue;

      while (el.firstChild) {
        parent.insertBefore(el.firstChild, el);
      }

      el.remove();
    }
  }
}

  private isTruthy(value: string | null): boolean {
    if (!value) return false;
    const v = value.trim().toLowerCase();
    return !['', '0', 'no', 'off', 'false'].includes(v);
  }
}

(window as any).CC = CoreComponent; 