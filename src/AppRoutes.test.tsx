import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import AppRoutes from './AppRoutes'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

describe('AppRoutes', () => {
  it('rend la page Home sur la route /', async () => {
    renderAt('/')
    expect(await screen.findByRole('button', { name: /toggle navigation/i })).toBeInTheDocument()
  })

  it('rend la page Projets sur la route /projets', async () => {
    renderAt('/projets')
    expect(await screen.findByRole('button', { name: /toggle navigation/i })).toBeInTheDocument()
  })

  it('affiche une page vide sur une route inconnue', () => {
    const { container } = renderAt('/inconnue')
    expect(container).toBeInTheDocument()
  })
})
