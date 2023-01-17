// My existing import, which doesn't work with Vitest:
import {Any} from "google-protobuf/google/protobuf/any_pb";

// This import works with Vitest and application
import AnyDefault from "google-protobuf/google/protobuf/any_pb";

describe('Example', () => {
    it('instantiates', () => {
        console.log({Any}) // Undefined when running with vitest, but defined in `index.ts`
        console.log({AnyDefault}) // Defined for both vitest and index.ts

        const any2 = new AnyDefault.Any();
        console.log({any2})

        const any = new Any() // TypeError: Any is not a constructor
    });
});
