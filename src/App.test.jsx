import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';
describe('CI demo', () => { it('shows a successful user interaction', async () => { const user = userEvent.setup(); render(<App />); await user.click(screen.getByRole('button', { name: 'Змінити стан' })); expect(screen.getByText('Результат тесту: виконано')).toBeInTheDocument(); }); });
