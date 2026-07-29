// Task: Convert this Combine-based function to async/await using Copilot.
import Combine

func fetchData() -> AnyPublisher<String, Error> {
    Just("Data loaded")
        .setFailureType(to: Error.self)
        .eraseToAnyPublisher()
}