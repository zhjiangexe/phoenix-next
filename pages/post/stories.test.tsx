import {render, screen} from "@testing-library/react"
// import userEvent from "@testing-library/uesr-event"

import {QueryClient, QueryClientProvider, useQuery} from "react-query"
import Stories from "@/pages/post/stories"

const queryClient = new QueryClient()

function createWrapper(element: any) {
    render(<QueryClientProvider client={queryClient}>
        {element}
    </QueryClientProvider>)
}

describe('123', function () {
    test('zoro', () => {
        createWrapper(<Stories/>)

        screen.debug()
        const byRole = screen.getAllByRole('button')
        expect(byRole[0]).toHaveTextContent("R")
    })
})