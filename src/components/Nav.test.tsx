import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Nav from './Nav'

function renderNav(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Nav />
    </MemoryRouter>,
  )
}

describe('Nav', () => {
  it('rend le logo et les liens de navigation', () => {
    renderNav()
    expect(screen.getByAltText('Yann Simon')).toBeInTheDocument()
    expect(screen.getByText('À propos')).toBeInTheDocument()
    expect(screen.getByText('Compétences')).toBeInTheDocument()
    expect(screen.getByText('Expérience')).toBeInTheDocument()
    expect(screen.getByText('Projets')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('ouvre et ferme le menu mobile au clic sur le toggle', async () => {
    const user = userEvent.setup()
    renderNav()

    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    const menu = document.querySelector('.nav-menu')
    expect(menu).not.toHaveClass('active')

    await user.click(toggle)
    expect(menu).toHaveClass('active')

    await user.click(toggle)
    expect(menu).not.toHaveClass('active')
  })

  it("affiche un lien ancre sur la page d'accueil", () => {
    renderNav('/')
    const aboutLink = screen.getByText('À propos')
    expect(aboutLink.tagName).toBe('A')
    expect(aboutLink).toHaveAttribute('href', '#about')
  })

  it('affiche un Link react-router sur les autres pages', () => {
    renderNav('/projets')
    const aboutLink = screen.getByText('À propos')
    expect(aboutLink.tagName).toBe('A')
    expect(aboutLink).toHaveAttribute('href', '/#about')
  })
})
