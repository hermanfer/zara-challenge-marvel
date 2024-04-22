import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import { FavoritesProvider } from "../../../adapters/state/FavoritesContext";
import '@testing-library/jest-dom/extend-expect';
import App from "../../../ui/App";

// Mock fetchData function
jest.mock("../../../adapters/api/fetchData.jsx", () => ({
    fetchData: jest.fn(() => Promise.resolve({ name: "Mocked Character" })),
}));

describe("App", () => {
    test("navigates to character detail page when a character is selected", async () => {
        const { debug } = render(
            <FavoritesProvider>
                <App />
            </FavoritesProvider>
        );

       // Espera a que aparezca el componente de carga
    await screen.findByTestId('loader');

    // Simula hacer clic en el enlace del personaje dentro del componente Home
    const characterListContainer = screen.getByTestId('home');
    const characterLinkContainer = within(characterListContainer).getByTestId("marvel-card-link-test");
    const characterLink = within(characterLinkContainer).getByTestId("marvel-card-link-test-link");

    act(() => {
        userEvent.click(characterLink);
    });

    debug();

    await waitFor(() => {
        expect(screen.getByTestId('character-detail')).toBeInTheDocument();
    });

    // Verifica si el nombre del personaje se muestra correctamente en el componente de detalle del personaje
    expect(screen.getByTestId('character-name')).toHaveTextContent("Mocked Character");
    });
});
