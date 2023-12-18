import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import Card from './Card';

jest.mock('axios');

test('renders name received from API', async () => {
  const mockData = { name: 'John Doe' }; // Datos simulados para la prueba
  axios.get.mockResolvedValueOnce({ data: mockData }); // Mock de la respuesta de la API

  const { getByText } = render(<Card />);

  // Espera a que se carguen los datos de la API (puedes utilizar waitFor o findByText)
  const nameElement = await getByText(/John Doe/i);

  expect(nameElement).toBeInTheDocument();
});