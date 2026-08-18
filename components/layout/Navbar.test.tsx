import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Navbar from './Navbar';

// Mock pentru Next.js Image si Link
vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt || ''} />
  ),
}));

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock pentru matchMedia (necesar pentru useEffect-ul de resize)
beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe('Navbar Component - Mobile Menu & Accordion Tests', () => {
  it('randează butonul de meniu mobil și meniul este închis inițial', () => {
    render(<Navbar />);

    const menuTrigger = screen.getByRole('button', { name: /open menu/i });
    expect(menuTrigger).toBeInTheDocument();

    // Meniul mobil (Dialog.Content) nu trebuie să fie vizibil inițial
    expect(
      screen.queryByRole('dialog', { name: /mobile navigation menu/i }),
    ).not.toBeInTheDocument();
  });

  it('deschide meniul mobil când se dă click pe butonul de meniu', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const menuTrigger = screen.getByRole('button', { name: /open menu/i });
    await user.click(menuTrigger);

    // Meniul mobil trebuie să devină vizibil
    const dialog = await screen.findByRole('dialog');
    expect(dialog).toBeInTheDocument();

    // Iconița butonului se schimbă și aria-label devine "Close menu"
    const closeTrigger = screen.getByRole('button', {
      name: /close menu/i,
      hidden: true,
    });
    expect(closeTrigger).toBeInTheDocument();
  });

  it('extinde un acordeon din meniul mobil și afișează sub-itemii', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    // 1. Deschidem meniul mobil
    const menuTrigger = screen.getByRole('button', { name: /open menu/i });
    await user.click(menuTrigger);

    // 2. Căutăm butonul acordeonului "Products" din interiorul meniului mobil
    const productsAccordionBtn = screen.getByRole('button', {
      name: /products/i,
    });
    expect(productsAccordionBtn).toHaveAttribute('aria-expanded', 'false');

    // Sub-itemii nu trebuie să fie vizibili inițial
    expect(screen.queryByText('Analytics')).not.toBeInTheDocument();

    // 3. Apăsăm pe acordeon pentru a-l deschide
    await user.click(productsAccordionBtn);

    // Verificăm dacă aria-expanded s-a modificat
    expect(productsAccordionBtn).toHaveAttribute('aria-expanded', 'true');

    // Sub-itemii trebuie să devină vizibili
    const analyticsLink = await screen.findByRole('link', {
      name: /analytics/i,
    });
    expect(analyticsLink).toBeInTheDocument();
    expect(analyticsLink).toHaveAttribute('href', '#analytics');
  });

  it('închide acordeonul la al doilea click', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    // Deschidem meniul mobil
    await user.click(screen.getByRole('button', { name: /open menu/i }));

    const productsBtn = screen.getByRole('button', { name: /products/i });

    // Deschidem acordeonul
    await user.click(productsBtn);
    expect(screen.getByText('Analytics')).toBeInTheDocument();

    // Închidem acordeonul
    await user.click(productsBtn);

    expect(productsBtn).toHaveAttribute('aria-expanded', 'false');

    // Sub-itemii dispar din DOM
    await waitFor(() => {
      expect(screen.queryByText('Analytics')).not.toBeInTheDocument();
    });
  });

  it('închide meniul mobil atunci când se dă click pe un link simplu', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    // Deschidem meniul mobil
    await user.click(screen.getByRole('button', { name: /open menu/i }));

    // Deschidem acordeonul Products
    await user.click(screen.getByRole('button', { name: /products/i }));

    // Dăm click pe sub-link-ul "Analytics" (care e învelit în Dialog.Close)
    const analyticsLink = screen.getByRole('link', { name: /analytics/i });
    await user.click(analyticsLink);

    // Meniul mobil trebuie să se închidă
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
