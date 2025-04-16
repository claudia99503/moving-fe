import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchDriver from '../../searchDriver';
import '@testing-library/jest-dom';

const queryClient = new QueryClient();

describe('SearchDriver', () => {
  it('renders SearchDriver page without crashing', () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SearchDriver />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(getByText('기사님 찾기')).toBeInTheDocument();
  });
});

