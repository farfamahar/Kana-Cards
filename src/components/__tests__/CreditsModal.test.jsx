import CreditsModal from "../CreditsModal";
import {render} from "@testing-library/react"

global.fetch = vi.fn()


describe("Modal tests", () => {
    describe("Testing credits modal links", () => {

        test('github link is correct', () => {
            const credits = render(<CreditsModal/>);
            const link = credits.getByTestId("github-link");
            expect(link).toHaveAttribute('href', 'https://github.com/fama-623');
        })

        test('tofugu link', () => {
            const credits = render(<CreditsModal/>);

            const link = credits.getByTestId("tofugu-link");
            expect(link).toHaveAttribute('href', 'https://www.tofugu.com/');
        })

        test('thoughtco link', () => {
            const credits = render(<CreditsModal/>);

            const link = credits.getByTestId("thoughtco-link");
            expect(link).toHaveAttribute('href', 'https://www.thoughtco.com/');
        })

        test('google link',() => {
            const credits = render(<CreditsModal/>);

            const link = credits.getByTestId("google-link");
            expect(link).toHaveAttribute('href', 'https://fonts.google.com/?subset=japanese');
        })

        test('modal has a close button', () => {
            const credits = render(<CreditsModal/>);
            const closeButton = credits.getByTestId("close-credits-button");
            expect(closeButton).toHaveTextContent("Close")
        })
    })

})